export type File = {
  title: string,
  id: string,
  extension: string,
  content: string,
  size: string
}

export type SubDir = {
  title: string,
  size: string,
  children: File[]
}

export type Dir = {
  title: string,
  size: string,
  children: SubDir[]
}

export type Dirs = Dir[]

export type DirsResponse = {
  dirs: Dirs
}
