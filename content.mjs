import * as dotenv from "dotenv";
dotenv.config();
import * as fs from "fs";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });
const pathContent = "dist/content";
const pathIndex = "dist/content/index.json";

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
      icon: page.icon,
      cover: page.cover,
      slug: page.properties.Name.title[0].plain_text
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, ""),
    };
  });

  // Create data folder
  if (!fs.existsSync(pathContent)) {
    fs.mkdirSync(pathContent);
    console.info(`Created ${pathContent} folder`);
  }

  // save json of pages metadata
  fs.writeFile(pathIndex, JSON.stringify(pages), (err) => {
    console.info(err ? err : `Metadata saved to ${pathIndex}`);
  });

  // convert pages
  const markdown = pages.map(async (page) => {
    const blocks = await n2m.pageToMarkdown(page.id);
    const markdownText = n2m.toMarkdownString(blocks);

    fs.writeFile(`${pathContent}/${page.slug}.md`, markdownText, (err) => {
      console.info(err ? err : `Saved ${page.title} as ${page.slug}.md containing ${blocks.length} blocks.`);
    });
  });
})();
