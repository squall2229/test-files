import { getApiFiles } from "./api"
import config from "../../config.json"

export const apiFiles = getApiFiles(config.baseUrl)
