import { ScriptItemType } from "./enums"

export interface ScriptItem {
  type: ScriptItemType
  content?: string
  keywords?: string[]
}
