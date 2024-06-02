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

export interface Page {
  content_urls: {
    desktop: { page: string }
    mobile: { page: string }
  }
  coordinates: {
    lat: number
    lon: number
  }
  description: string
  extract_html: string
  source: string
  thumbnail: {
    source: string
    width: number
    height: number
  }
  title: string
  timestamp: string
  type: string
}

export interface OnThisDayModel {
  text: string
  year: number
  pages: Page[]
  selected: boolean
}

export interface OnThisDayResponse {
  selected: OnThisDayModel[]
  image: OnThisDayModel['pages'][0]['thumbnail']
}
