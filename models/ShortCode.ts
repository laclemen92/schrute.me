import { KVMEntity, ValueType } from "@laclemen92/kvm";
import { z } from "zod";

const shortCodeSchema = z.object({
  id: z.string(),
  url: z.string(),
  title: z.string(),
  redirectTime: z.number(),
  gif: z.object({
    url: z.string(),
    title: z.string(),
    id: z.string()
  }),
  userLogin: z.string(),
  createdAt: z.date().optional(),
}).strict();

export const shortCodeEntity: KVMEntity<typeof shortCodeSchema.shape> = {
  name: "shortCodes",
  primaryKey: [
    {
      name: "shortCodes",
      key: "id",
    },
  ],
  secondaryIndexes: [{
    name: "user",
    key: [{
      name: "user",
      key: "userLogin",
    }, {
      name: "shortCodes",
      key: "id",
    }],
    valueType: ValueType.KEY,
    valueKey: "id",
  }],
  schema: shortCodeSchema,
};

export type ShortCode = z.infer<typeof shortCodeEntity.schema>;
