import { Client } from "@notionhq/client";
import * as dotenv from "dotenv";

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function sendToNotion(title, summary) {
  // console.log(jsonData);
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.DATABASE_ID,
      },
      properties: {
        Status: {
          status: {
            name: "Not started",
          },
        },
        Name: {
          id: "title",
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: "A better title for the page",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "This is also not done",
              href: null,
            },
          ],
        },
      },
    });
    console.log(`\n_______________ SENT TO NOTION ___________________`);
    console.log("Link no notion: ", response.url);
  } catch (error) {
    console.error("Notion: \n", error.body);
  }
}
