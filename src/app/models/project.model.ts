import { Tools } from "./tools.model";


export interface Project {
  id:number,
  title:string,
  image:string,
  description:string,
  tools:Tools[]
}
