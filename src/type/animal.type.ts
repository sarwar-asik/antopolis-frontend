import { ICategory } from "./category.type";
import { ICommonDataType } from "./common.type";

export type IAnimal = ICommonDataType & {
  title: string;
  img: string;
  category_id: string | ICategory;
};
