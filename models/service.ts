import type { MarkdownRoot, ParsedContent } from '@nuxt/content'
import type { Category } from './category'
import type { Image } from './image'
import type { Tag } from './tag'

export interface Service extends ParsedContent {
  cover?: string
  title?: string
  body: MarkdownRoot | null
  gallery?: Image[]
  tags?: Tag[]
  categories?: Category[]
}
