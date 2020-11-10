
import { Dirs } from "../services/api/types"

export type RootState = {
  dirs: {
    loaded: boolean;
    loading: boolean;
    dirs: Dirs
  }
}
