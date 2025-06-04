import { ShortCode, shortCodeEntity } from "@/models/ShortCode.ts";
import { kv } from "@/utils/db.ts";
import { create, deleteKey, findUnique, findMany, update } from "@laclemen92/kvm";

const allowedShortCodeChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "m",
  "n",
  "q",
  "r",
  "t",
  "w",
  "y",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "J",
  "m",
  "n",
  "Q",
  "R",
  "T",
  "W",
  "Y",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const SHORT_CODE_LENGTH = 5;

const getRandomCharacter = (): string => {
  return allowedShortCodeChars[
    Math.floor(Math.random() * allowedShortCodeChars.length)
  ];
};

export class ShortCodeService {
  constructor() {
  }

  async makeShortCode(): Promise<string> {
    const shortCodeArray = [];
    for (let x = 0; x < SHORT_CODE_LENGTH; x++) {
      shortCodeArray.push(getRandomCharacter());
    }

    const newCode = shortCodeArray.join("");

    if (await this.getShortCode(newCode)) {
      return this.makeShortCode();
    }

    return newCode;
  }

  async createShortCode(shortCode: Omit<ShortCode, "id">): Promise<ShortCode> {
    const id = await this.makeShortCode();

    const result = await create<ShortCode>(shortCodeEntity, kv, {
      ...shortCode,
      id,
      createdAt: new Date(),
      clickCount: 0,
      userLogin: shortCode.userLogin || null, // Ensure null instead of empty string
    });

    if (!result || !result?.value) {
      throw new Error("Failed to create shortCode");
    }
    return result?.value;
  }

  // can see if I vogted for a post, pass the postid and my userLogin. If I voted, return the vote, if not, return null
  async getShortCode(id: string) {
    const result = await findUnique<ShortCode>(shortCodeEntity, kv, id);
    return result?.value;
  }

  async deleteShortCode(id: string) {
    await deleteKey<ShortCode>(shortCodeEntity, kv, id, {
      cascadeDelete: true,
    });
    return;
  }

  async getUserShortCodes(userLogin: string): Promise<ShortCode[]> {
    const result = await findMany<ShortCode>(shortCodeEntity, kv, "user", {
      userLogin,
    });
    
    // Filter out any entries with null userLogin (shouldn't happen with the query, but extra safety)
    // and sort by creation date, newest first
    return result
      .map(r => r.value)
      .filter(shortCode => shortCode.userLogin === userLogin && shortCode.userLogin !== null)
      .sort((a, b) => {
        const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return bDate - aDate;
      });
  }

  async incrementClickCount(id: string): Promise<void> {
    const shortCode = await this.getShortCode(id);
    if (!shortCode) {
      return;
    }

    const updatedShortCode = {
      ...shortCode,
      clickCount: (shortCode.clickCount || 0) + 1,
      lastClickedAt: new Date(),
    };

    await update<ShortCode>(shortCodeEntity, kv, id, updatedShortCode);
  }

  async updateShortCode(id: string, updates: Partial<Pick<ShortCode, "title" | "url" | "redirectTime">>): Promise<ShortCode | null> {
    const shortCode = await this.getShortCode(id);
    if (!shortCode) {
      return null;
    }

    const updatedShortCode = {
      ...shortCode,
      ...updates,
    };

    const result = await update<ShortCode>(shortCodeEntity, kv, id, updatedShortCode);
    return result?.value || null;
  }
}
