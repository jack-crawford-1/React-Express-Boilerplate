export interface Article {
  title: string
  displaytitle: string
  type: string
  extract: string
  content_urls?: {
    desktop?: {
      page: string
    }
  }
}

export interface Image {
  title: string
  source: string
  description: {
    html: string
  }
}

export interface OnThisDayModel {
  text: string
  year: number
  image: Image
  selected: boolean
}

export interface OnThisDayResponse {
  selected: OnThisDayModel[]
  image: OnThisDayModel['image']
}
