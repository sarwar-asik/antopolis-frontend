import { IAnimal } from "./animal.type";
import { ICommonDataType } from "./common.type";

export type ICategory = ICommonDataType & {
  title: string;
  animals?: IAnimal[] | [];
};

// export type IModalValue = boolean | "category" | "animal"
