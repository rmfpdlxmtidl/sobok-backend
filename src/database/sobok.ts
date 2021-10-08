/**
 * AUTO-GENERATED FILE @ Fri, 08 Oct 2021 04:55:00 GMT - DO NOT EDIT!
 *
 * This file was automatically generated by schemats v.0.0.10
 * $ schemats generate postgres://username:password@localhost:5432/sobok -s public
 *
 */

export interface bucket_x_menu {
  bucket_id: number
  menu_id: number
  creation_time: Date
}

export interface leader_user_x_follower_user {
  leader_user_id: string
  follower_user_id: string
  creation_time: Date
}

export interface bucket_x_store {
  bucket_id: number
  store_id: number
  creation_time: Date
}

export interface hashtag {
  id: number
  creation_time: Date
  name: string
}

export interface store_x_hashtag {
  store_id: number
  hashtag_id: number
  creation_time: Date
}

export interface feed_x_rated_menu {
  feed_id: number
  menu_id: number
  creation_time: Date
  x: number
  y: number
  nth_image: number
}

export interface user_x_liked_news {
  user_id: string
  news_id: number
  creation_time: Date
}

export interface feed_x_hashtag {
  feed_id: number
  hashtag_id: number
  creation_time: Date
}

export interface comment {
  id: number
  creation_time: Date
  modification_time: Date
  contents: string[]
  user_id: string
  feed_id: number
  image_url?: string | null
  comment_id?: number | null
}

export interface user {
  id: string
  creation_time: Date
  modification_time: Date
  unique_name: string
  email: string
  name: string
  phone?: string | null
  gender: number
  is_email_verified: boolean
  is_star_user: boolean
  bio?: string | null
  birth?: Date | null
  image_url?: string | null
  nickname?: string | null
  google_oauth?: string | null
  naver_oauth?: string | null
  kakao_oauth?: string | null
  password_hash: string
  logout_time: Date
}

export interface menu_x_hashtag {
  menu_id: number
  hashtag_id: number
  creation_time: Date
}

export interface user_x_liked_trend {
  user_id: string
  trend_id: number
  creation_time: Date
}

export interface user_x_liked_menu {
  user_id: string
  menu_id: number
  creation_time: Date
}

export interface menu {
  id: number
  creation_time: Date
  modification_time: Date
  name: string
  price: number
  is_sold_out: boolean
  image_urls: string[]
  category: number
  store_id: number
}

export interface user_x_liked_comment {
  user_id: string
  comment_id: number
  creation_time: Date
}

export interface bucket {
  id: number
  creation_time: Date
  modification_time: Date
  name: string
  type: number
  user_id: string
}

export interface store {
  id: number
  creation_time: Date
  modification_time: Date
  name: string
  town: string
  address: string
  point: { x: number; y: number }
  categories: number[]
  tel?: string | null
  registration_number?: string | null
  description?: string | null
  business_hours?: string[] | null
  holidays?: Date[] | null
  image_urls?: string[] | null
  user_id?: string | null
}

export interface user_x_liked_feed {
  user_id: string
  feed_id: number
  creation_time: Date
}

export interface news_x_tagged_menu {
  news_id: number
  menu_id: number
  creation_time: Date
  x: number
  y: number
  nth_image: number
}

export interface user_x_liked_store {
  user_id: string
  store_id: number
  creation_time: Date
}

export interface feed {
  id: number
  creation_time: Date
  modification_time: Date
  rating: number
  contents: string[]
  image_urls: string[]
  like_count: number
  comment_count: number
  store_id: number
  user_id: string
}

export interface news {
  id: number
  creation_time: Date
  modification_time: Date
  title: string
  contents: string[]
  category: number
  store_id: number
  image_urls?: string[] | null
}

export interface trend {
  id: number
  creation_time: Date
  modification_time: Date
  category: number
  title: string
  contents: string[]
  user_id: string
}

export interface Tables {
  bucket_x_menu: bucket_x_menu
  leader_user_x_follower_user: leader_user_x_follower_user
  bucket_x_store: bucket_x_store
  hashtag: hashtag
  store_x_hashtag: store_x_hashtag
  feed_x_rated_menu: feed_x_rated_menu
  user_x_liked_news: user_x_liked_news
  feed_x_hashtag: feed_x_hashtag
  comment: comment
  user: user
  menu_x_hashtag: menu_x_hashtag
  user_x_liked_trend: user_x_liked_trend
  user_x_liked_menu: user_x_liked_menu
  menu: menu
  user_x_liked_comment: user_x_liked_comment
  bucket: bucket
  store: store
  user_x_liked_feed: user_x_liked_feed
  news_x_tagged_menu: news_x_tagged_menu
  user_x_liked_store: user_x_liked_store
  feed: feed
  news: news
  trend: trend
}