import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const pages = response.results.map((page) => {
    return {
      id: page.id,
      created: page.created_time,
      updated: page.last_edited_time,
      tags: page.properties.Tags.multi_select.map((tag) => tag.name),
      title: page.properties.Name.title[0].plain_text,
    };
  });

  console.log(pages);
})();
