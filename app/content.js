import * as dotenv from 'dotenv';
dotenv.config();
import * as fs from 'fs';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

(async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  // get pages
  const pages = response.results.map((page) => {
    return {
      id: page.id,
      created: page.created_time,
      updated: page.last_edited_time,
      tags: page.properties.Tags.multi_select.map((tag) => tag.name),
      title: page.properties.Name.title[0].plain_text,
    };
  });

  // Create data folder
  if (!fs.existsSync(process.env.PATH_CONTENT)) {
    fs.mkdirSync(process.env.PATH_CONTENT);
  }

  // save json of pages metadata
  fs.writeFile('public/index.json', JSON.stringify(pages), (err) => {
    if (err) {
      console.log(err);
    }
  });

  // convert pages
  const markdown = pages.map(async (page) => {
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    fs.writeFile(
      `${process.env.PATH_CONTENT}/${page.id}.md`,
      mdString,
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
})();
