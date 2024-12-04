import type { MarkdownRoot, ParsedContent } from '@nuxt/content'
import type { Image } from './image'

export interface Category extends ParsedContent {
  name: string
  featured?: boolean
  visible?: boolean
  images?: Image
  body: MarkdownRoot
  order: number
}
