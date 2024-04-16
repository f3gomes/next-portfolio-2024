import type { RichTextContent } from "@graphcms/rich-text-types";

declare module PageInfo {
  export type Home = {
    intro: {
      raw: RichTextContent;
    };
    teches: {
      name: string;
    }[];
    profileImage: {
      url: string;
    };
  };
}
