// ts --> .d.ts ---> ts

import superagent from "superagent"; // js写成库转换成ts
import cheerio from "cheerio";

interface web {
  cardImgAlt: string | undefined;
  descs: string;
  date: string | undefined;
}
class Crowller {
  private url = `https://xiaoguiking.github.io/`;
  // private rawHtml = "";

  //
  getWebInfo(html: string) {
    const $ = cheerio.load(html);
    const article = $(".article");
    const webInfos: web[] = [];
    article.map((index, element) => {
      // 标题
      const cardImgAlt = $(element).find(".responsive-img").attr("alt");
      // 描述 descs
      const descs = $(element).find(".summary").text();
      const date = $(element).find(".publish-date").text();
      console.log(cardImgAlt, "title", descs, "描述", date);
      webInfos.push({
        cardImgAlt,
        descs,
        date,
      });
    });
    const result = {
      time: new Date().getTime(),
      data: webInfos,
    };
    console.log(result, "data");
  }
  //获取页面html
  async getRawHtml() {
    const results = await superagent.get(this.url);
    console.log(results.text);
    // this.rawHtml = results.text;
    this.getWebInfo(results.text);
  }
  constructor() {
    this.getRawHtml();
    console.log("constructor");
  }
}
const cr = new Crowller();
