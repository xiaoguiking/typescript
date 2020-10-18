// ts --> .d.ts ---> ts
import fs from 'fs';
import path from 'path';
import superagent from "superagent"; // js写成库转换成ts
import cheerio from "cheerio";

interface Course {
  cardImgAlt: string | undefined;
  descs: string;
  date: string | undefined;
}

interface CourseResult {
  time: number,
  data: Course[]
}

interface Content {
  [propName: number]: Course[]
}
class Crowller {
  private url = `https://xiaoguiking.github.io/`;
  // private rawHtml = "";

  //
  getWebInfo(html: string) {
    const $ = cheerio.load(html);
    const article = $(".article");
    const courseInfos: Course[] = [];
    article.map((index, element) => {
      // 标题
      const cardImgAlt = $(element).find(".responsive-img").attr("alt");
      // 描述 descs
      const descs = $(element).find(".summary").text();
      const date = $(element).find(".publish-date").text();
      console.log(cardImgAlt, "title", descs, "描述", date);
      courseInfos.push({
        cardImgAlt,
        descs,
        date,
      });
    });
    return {
      time: new Date().getTime(),
      data: courseInfos,
    };
    // console.log(result, "data");
  }

  //获取页面html
  async getRawHtml() {
    const results = await superagent.get(this.url);
    console.log(results.text);
    // this.rawHtml = results.text;
    // this.getWebInfo(results.text);
    return results.text;
  }

  //  存到json文件
  generateJsonContent(courseInfo: CourseResult) {
    // 绝对路径
    const filePath = path.resolve(__dirname, "./course.json");
    console.log(filePath, 'path')
    let fileContent:Content = {};
    if(fs.existsSync(filePath)) {
      // 刚开始左边是对象，右边是字符串（转化成对象）
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[courseInfo.time] = courseInfo.data;
    fs.writeFileSync(filePath, JSON.stringify(fileContent));
  }

  // 爬虫调用过程
  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const courseInfo =  this.getWebInfo(html);
    this.generateJsonContent(courseInfo);
    console.log(courseInfo, 'courseResult')
  }

  constructor() {
    this.initSpiderProcess();
  }
}

const cr = new Crowller();
