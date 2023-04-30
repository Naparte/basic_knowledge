declare module "express" {
  interface Router {
    get(path: string, cb?: (req: any, res: any) => void): void;
  }

  interface App {
    use(path: string, router: any): void;
    listeners(port: number, cb?: () => void);
  }

  interface Express {
    (): App;
  }

  const express: Express;
  export default express;
}


//  定义全局变量
declare var a: string;
