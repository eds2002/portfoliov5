export interface Project {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  projShortName?: string
  projectDesc?: string
  projectImages?: ImageInterface[]
  projectName?: string
  shortDesc?: string
  projectLabel?: string
  techStack?: string[]
  webUrl?: string
}

export interface ImageInterface {
  _key: string
  _type: string
  asset: {
    _ref: string
    _type: 'reference'
  }
  imageHeading?: string
  imageParagraph?: BlockText[]
}

export interface BlockText {
  children: Array<{
    marks: any
    text: string
    _key: string
    _type: string
  }>
  markDefs: []
  style: string
  _key: string
  _type: string
}
