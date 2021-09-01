/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  EmailAddress: any
  JWT: any
  NonEmptyString: any
  URL: any
}

export type Bucket = {
  __typename?: 'Bucket'
  creationTime: Scalars['DateTime']
  id: Scalars['ID']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  /** from other table */
  user: User
}

export type Comment = {
  __typename?: 'Comment'
  /** from other table - nullable */
  comment?: Maybe<Comment>
  contents: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  /** from other table */
  feed: Feed
  id: Scalars['ID']
  /** nullable */
  imageUrl?: Maybe<Scalars['URL']>
  modificationTime: Scalars['DateTime']
  user: User
}

export type Feed = {
  __typename?: 'Feed'
  commentCount: Scalars['Int']
  /** 피드에 달린 댓글 */
  comments?: Maybe<Array<Comment>>
  contents: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  /** 피드에 달린 해시태그 */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  id: Scalars['ID']
  imageUrls: Array<Scalars['URL']>
  /** 피드 좋아요 여부 (로그인 필요) */
  isLiked: Scalars['Boolean']
  likeCount: Scalars['Int']
  /** 피드에 태그된 메뉴 목록 */
  menus?: Maybe<Array<Menu>>
  modificationTime: Scalars['DateTime']
  rating: Scalars['NonEmptyString']
  /** 피드에 태그된 매장 */
  store: Store
  storeId: Scalars['ID']
  /** 피드 작성자 */
  user: User
  userId: Scalars['ID']
}

/** 성별 */
export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
}

export type Menu = {
  __typename?: 'Menu'
  category: Scalars['NonEmptyString']
  creationTime: Scalars['DateTime']
  /** 메뉴에 달린 해시태그 */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  id: Scalars['ID']
  imageUrls: Array<Scalars['URL']>
  /** 로그인한 사용자가 이 메뉴를 버킷에 담은 여부 */
  isInBucket: Scalars['Boolean']
  /** 로그인한 사용자가 이 메뉴를 좋아하는 여부 */
  isLiked: Scalars['Boolean']
  isSoldOut: Scalars['Boolean']
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  price: Scalars['Int']
  /** 이 메뉴를 판매하는 매장 */
  store: Store
  storeId: Scalars['ID']
}

export type Mutation = {
  __typename?: 'Mutation'
  /** 고유 이름 또는 이메일과 비밀번호를 전송하면 JWT 인증 토큰을 반환함 */
  login?: Maybe<Scalars['JWT']>
  /** JWT 인증 토큰과 같이 요청하면 로그아웃 성공 여부를 반환함 */
  logout: Scalars['Boolean']
  /** 회원가입에 필요한 정보를 주면 성공했을 때 인증 토큰을 반환함 */
  register?: Maybe<Scalars['JWT']>
  /** 회원탈퇴 시 사용자 정보가 모두 초기화됩 */
  unregister: Scalars['Boolean']
}

export type MutationLoginArgs = {
  passwordHash: Scalars['NonEmptyString']
  uniqueNameOrEmail: Scalars['NonEmptyString']
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type News = {
  __typename?: 'News'
  category: Scalars['NonEmptyString']
  contents: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  id: Scalars['ID']
  imageUrls?: Maybe<Array<Scalars['URL']>>
  /** 뉴스 좋아요 여부 (로그인 필요) */
  isLiked: Scalars['Boolean']
  modificationTime: Scalars['DateTime']
  /** 이 소식을 올린 매장 */
  store: Store
  storeId: Scalars['ID']
  title: Scalars['NonEmptyString']
}

/** OAuth 공급자 */
export enum Provider {
  Google = 'GOOGLE',
  Kakao = 'KAKAO',
  Naver = 'NAVER',
  Sobok = 'SOBOK',
}

export type Query = {
  __typename?: 'Query'
  /** 피드 상세 */
  feed?: Maybe<Feed>
  /** 특정 매장 피드 목록 */
  feedByOneStore?: Maybe<Array<Feed>>
  /** 특정 동네 피드 목록 */
  feedByOneTown?: Maybe<Array<Feed>>
  /** 이메일 중복 여부 검사 */
  isEmailUnique: Scalars['Boolean']
  /** 사용자 고유 이름 중복 여부 검사 */
  isUniqueNameUnique: Scalars['Boolean']
  /** 인증 토큰과 같이 요청하면 사용자 정보를 반환 */
  me: User
  menu?: Maybe<Menu>
  menu2?: Maybe<Menu>
  menus?: Maybe<Array<Menu>>
  menus2?: Maybe<Array<Menu>>
  /** 소식 상세 */
  news?: Maybe<News>
  /** 전체 매장 소식 목록 */
  newsByAllStores?: Maybe<Array<News>>
  /** 좋아하는 매장 소식 목록 (로그인 필요) */
  newsByLikedStores?: Maybe<Array<News>>
  /** 특정 매장 소식 목록 */
  newsByOneStore?: Maybe<Array<News>>
  searchFeed?: Maybe<Array<Menu>>
  searchMenus?: Maybe<Array<Menu>>
  searchStores?: Maybe<Array<Menu>>
  /** 특정 매장 정보 */
  store?: Maybe<Store>
  /** 동네 및 카테고리별 매장 목록 */
  stores: Array<Store>
}

export type QueryFeedArgs = {
  id: Scalars['ID']
}

export type QueryFeedByOneStoreArgs = {
  storeId: Scalars['ID']
}

export type QueryFeedByOneTownArgs = {
  town: Scalars['ID']
}

export type QueryIsEmailUniqueArgs = {
  email: Scalars['EmailAddress']
}

export type QueryIsUniqueNameUniqueArgs = {
  uniqueName: Scalars['NonEmptyString']
}

export type QueryMenuArgs = {
  id: Scalars['ID']
}

export type QueryMenu2Args = {
  name: Scalars['NonEmptyString']
  storeId: Scalars['ID']
}

export type QueryMenusArgs = {
  category?: Maybe<Scalars['NonEmptyString']>
  town?: Maybe<Scalars['NonEmptyString']>
}

export type QueryMenus2Args = {
  storeId?: Maybe<Scalars['ID']>
}

export type QueryNewsArgs = {
  id: Scalars['ID']
}

export type QueryNewsByOneStoreArgs = {
  categories?: Maybe<Array<Scalars['NonEmptyString']>>
  storeId: Scalars['ID']
}

export type QuerySearchFeedArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
}

export type QuerySearchMenusArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
}

export type QuerySearchStoresArgs = {
  hashtags: Array<Scalars['NonEmptyString']>
}

export type QueryStoreArgs = {
  id: Scalars['ID']
}

export type QueryStoresArgs = {
  categories?: Maybe<Array<Scalars['NonEmptyString']>>
  town?: Maybe<Scalars['NonEmptyString']>
}

export type RegisterInput = {
  bio?: Maybe<Scalars['String']>
  birth?: Maybe<Scalars['Date']>
  email: Scalars['EmailAddress']
  gender: Gender
  imageUrl?: Maybe<Scalars['URL']>
  name: Scalars['NonEmptyString']
  passwordHash: Scalars['NonEmptyString']
  phone: Scalars['NonEmptyString']
  uniqueName: Scalars['NonEmptyString']
}

export type Store = {
  __typename?: 'Store'
  address: Scalars['NonEmptyString']
  businessHours?: Maybe<Array<Scalars['NonEmptyString']>>
  categories: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  /** 매장에 달린 해시태그 */
  hashtags?: Maybe<Array<Scalars['NonEmptyString']>>
  holidays?: Maybe<Array<Scalars['Date']>>
  id: Scalars['ID']
  imageUrls?: Maybe<Array<Scalars['URL']>>
  /** 로그인한 사용자가 이 매장을 버킷에 담은 여부 */
  isInBucket: Scalars['Boolean']
  /** 로그인한 사용자가 이 매장을 좋아하는 여부 */
  isLiked: Scalars['Boolean']
  /** 매장에서 판매하는 메뉴 목록 */
  menus: Array<Menu>
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  /** 매장에서 올린 소식 목록 */
  news?: Maybe<Array<News>>
  registrationNumber?: Maybe<Scalars['String']>
  tel?: Maybe<Scalars['String']>
  town: Scalars['NonEmptyString']
  /** 매장을 소유한 사용자 정보 */
  user?: Maybe<User>
  userId: Scalars['ID']
}

export type Trend = {
  __typename?: 'Trend'
  contents: Array<Scalars['NonEmptyString']>
  creationTime: Scalars['DateTime']
  id: Scalars['ID']
  modificationTime: Scalars['DateTime']
  /** from other table */
  user: User
}

export type User = {
  __typename?: 'User'
  bio?: Maybe<Scalars['String']>
  birth?: Maybe<Scalars['Date']>
  /** 내가 쓴 댓글 */
  comments?: Maybe<Array<Comment>>
  creationTime: Scalars['DateTime']
  email: Scalars['EmailAddress']
  /** 내가 쓴 피드 */
  feed?: Maybe<Array<Feed>>
  /** 사용자를 따르는 다른 사용자 */
  followers?: Maybe<Array<User>>
  /** 사용자가 따르고 있는 다른 사용자 */
  followings?: Maybe<Array<User>>
  gender: Gender
  id: Scalars['ID']
  imageUrl?: Maybe<Scalars['URL']>
  isEmailVerified: Scalars['Boolean']
  isStarUser: Scalars['Boolean']
  /** 좋아요 누른 댓글 */
  likedComments?: Maybe<Array<Comment>>
  /** 좋아요 누른 피드 */
  likedFeed?: Maybe<Array<Feed>>
  /** 좋아요 누른 메뉴 */
  likedMenus?: Maybe<Array<Menu>>
  /** 좋아요 누른 소식 */
  likedNews?: Maybe<Array<News>>
  /** 좋아요 누른 매장 */
  likedStores?: Maybe<Array<Store>>
  /** 좋아요 누른 트렌드 */
  likedTrends?: Maybe<Array<Trend>>
  /** 내 메뉴 버킷 리스트 */
  menuBuckets?: Maybe<Array<Bucket>>
  modificationTime: Scalars['DateTime']
  name: Scalars['NonEmptyString']
  nuckname?: Maybe<Scalars['String']>
  phone: Scalars['NonEmptyString']
  providers: Array<Provider>
  /** 내 매장 버킷 리스트 */
  storeBuckets?: Maybe<Array<Bucket>>
  uniqueName: Scalars['NonEmptyString']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Bucket: ResolverTypeWrapper<Bucket>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Comment: ResolverTypeWrapper<Comment>
  Date: ResolverTypeWrapper<Scalars['Date']>
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>
  Feed: ResolverTypeWrapper<Feed>
  Int: ResolverTypeWrapper<Scalars['Int']>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Gender: Gender
  JWT: ResolverTypeWrapper<Scalars['JWT']>
  Menu: ResolverTypeWrapper<Menu>
  Mutation: ResolverTypeWrapper<{}>
  News: ResolverTypeWrapper<News>
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']>
  Provider: Provider
  Query: ResolverTypeWrapper<{}>
  RegisterInput: RegisterInput
  String: ResolverTypeWrapper<Scalars['String']>
  Store: ResolverTypeWrapper<Store>
  Trend: ResolverTypeWrapper<Trend>
  URL: ResolverTypeWrapper<Scalars['URL']>
  User: ResolverTypeWrapper<User>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Bucket: Bucket
  ID: Scalars['ID']
  Comment: Comment
  Date: Scalars['Date']
  DateTime: Scalars['DateTime']
  EmailAddress: Scalars['EmailAddress']
  Feed: Feed
  Int: Scalars['Int']
  Boolean: Scalars['Boolean']
  JWT: Scalars['JWT']
  Menu: Menu
  Mutation: {}
  News: News
  NonEmptyString: Scalars['NonEmptyString']
  Query: {}
  RegisterInput: RegisterInput
  String: Scalars['String']
  Store: Store
  Trend: Trend
  URL: Scalars['URL']
  User: User
}

export type BucketResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Bucket'] = ResolversParentTypes['Bucket']
> = {
  creationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  modificationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']
> = {
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>
  contents?: Resolver<Array<ResolversTypes['NonEmptyString']>, ParentType, ContextType>
  creationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  feed?: Resolver<ResolversTypes['Feed'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>
  modificationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export interface EmailAddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress'
}

export type FeedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Feed'] = ResolversParentTypes['Feed']
> = {
  commentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>
  contents?: Resolver<Array<ResolversTypes['NonEmptyString']>, ParentType, ContextType>
  creationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  hashtags?: Resolver<Maybe<Array<ResolversTypes['NonEmptyString']>>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  imageUrls?: Resolver<Array<ResolversTypes['URL']>, ParentType, ContextType>
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  likeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  menus?: Resolver<Maybe<Array<ResolversTypes['Menu']>>, ParentType, ContextType>
  modificationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  rating?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>
  storeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JWT'], any> {
  name: 'JWT'
}

export type MenuResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Menu'] = ResolversParentTypes['Menu']
> = {
  category?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>
  creationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  hashtags?: Resolver<Maybe<Array<ResolversTypes['NonEmptyString']>>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  imageUrls?: Resolver<Array<ResolversTypes['URL']>, ParentType, ContextType>
  isInBucket?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  isSoldOut?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  modificationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>
  storeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  login?: Resolver<
    Maybe<ResolversTypes['JWT']>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'passwordHash' | 'uniqueNameOrEmail'>
  >
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  register?: Resolver<
    Maybe<ResolversTypes['JWT']>,
    ParentType,
    ContextType,
    RequireFields<MutationRegisterArgs, 'input'>
  >
  unregister?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
}

export type NewsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['News'] = ResolversParentTypes['News']
> = {
  category?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>
  contents?: Resolver<Array<ResolversTypes['NonEmptyString']>, ParentType, ContextType>
  creationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  imageUrls?: Resolver<Maybe<Array<ResolversTypes['URL']>>, ParentType, ContextType>
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  modificationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>
  storeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface NonEmptyStringScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString'
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  feed?: Resolver<
    Maybe<ResolversTypes['Feed']>,
    ParentType,
    ContextType,
    RequireFields<QueryFeedArgs, 'id'>
  >
  feedByOneStore?: Resolver<
    Maybe<Array<ResolversTypes['Feed']>>,
    ParentType,
    ContextType,
    RequireFields<QueryFeedByOneStoreArgs, 'storeId'>
  >
  feedByOneTown?: Resolver<
    Maybe<Array<ResolversTypes['Feed']>>,
    ParentType,
    ContextType,
    RequireFields<QueryFeedByOneTownArgs, 'town'>
  >
  isEmailUnique?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<QueryIsEmailUniqueArgs, 'email'>
  >
  isUniqueNameUnique?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<QueryIsUniqueNameUniqueArgs, 'uniqueName'>
  >
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  menu?: Resolver<
    Maybe<ResolversTypes['Menu']>,
    ParentType,
    ContextType,
    RequireFields<QueryMenuArgs, 'id'>
  >
  menu2?: Resolver<
    Maybe<ResolversTypes['Menu']>,
    ParentType,
    ContextType,
    RequireFields<QueryMenu2Args, 'name' | 'storeId'>
  >
  menus?: Resolver<
    Maybe<Array<ResolversTypes['Menu']>>,
    ParentType,
    ContextType,
    RequireFields<QueryMenusArgs, never>
  >
  menus2?: Resolver<
    Maybe<Array<ResolversTypes['Menu']>>,
    ParentType,
    ContextType,
    RequireFields<QueryMenus2Args, never>
  >
  news?: Resolver<
    Maybe<ResolversTypes['News']>,
    ParentType,
    ContextType,
    RequireFields<QueryNewsArgs, 'id'>
  >
  newsByAllStores?: Resolver<Maybe<Array<ResolversTypes['News']>>, ParentType, ContextType>
  newsByLikedStores?: Resolver<Maybe<Array<ResolversTypes['News']>>, ParentType, ContextType>
  newsByOneStore?: Resolver<
    Maybe<Array<ResolversTypes['News']>>,
    ParentType,
    ContextType,
    RequireFields<QueryNewsByOneStoreArgs, 'storeId'>
  >
  searchFeed?: Resolver<
    Maybe<Array<ResolversTypes['Menu']>>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchFeedArgs, 'hashtags'>
  >
  searchMenus?: Resolver<
    Maybe<Array<ResolversTypes['Menu']>>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchMenusArgs, 'hashtags'>
  >
  searchStores?: Resolver<
    Maybe<Array<ResolversTypes['Menu']>>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchStoresArgs, 'hashtags'>
  >
  store?: Resolver<
    Maybe<ResolversTypes['Store']>,
    ParentType,
    ContextType,
    RequireFields<QueryStoreArgs, 'id'>
  >
  stores?: Resolver<
    Array<ResolversTypes['Store']>,
    ParentType,
    ContextType,
    RequireFields<QueryStoresArgs, never>
  >
}

export type StoreResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']
> = {
  address?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>
  businessHours?: Resolver<Maybe<Array<ResolversTypes['NonEmptyString']>>, ParentType, ContextType>
  categories?: Resolver<Array<ResolversTypes['NonEmptyString']>, ParentType, ContextType>
  creationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  hashtags?: Resolver<Maybe<Array<ResolversTypes['NonEmptyString']>>, ParentType, ContextType>
  holidays?: Resolver<Maybe<Array<ResolversTypes['Date']>>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  imageUrls?: Resolver<Maybe<Array<ResolversTypes['URL']>>, ParentType, ContextType>
  isInBucket?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  menus?: Resolver<Array<ResolversTypes['Menu']>, ParentType, ContextType>
  modificationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>
  news?: Resolver<Maybe<Array<ResolversTypes['News']>>, ParentType, ContextType>
  registrationNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  tel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  town?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type TrendResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Trend'] = ResolversParentTypes['Trend']
> = {
  contents?: Resolver<Array<ResolversTypes['NonEmptyString']>, ParentType, ContextType>
  creationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  modificationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL'
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  birth?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>
  creationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>
  feed?: Resolver<Maybe<Array<ResolversTypes['Feed']>>, ParentType, ContextType>
  followers?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>
  followings?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>
  isEmailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  isStarUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  likedComments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>
  likedFeed?: Resolver<Maybe<Array<ResolversTypes['Feed']>>, ParentType, ContextType>
  likedMenus?: Resolver<Maybe<Array<ResolversTypes['Menu']>>, ParentType, ContextType>
  likedNews?: Resolver<Maybe<Array<ResolversTypes['News']>>, ParentType, ContextType>
  likedStores?: Resolver<Maybe<Array<ResolversTypes['Store']>>, ParentType, ContextType>
  likedTrends?: Resolver<Maybe<Array<ResolversTypes['Trend']>>, ParentType, ContextType>
  menuBuckets?: Resolver<Maybe<Array<ResolversTypes['Bucket']>>, ParentType, ContextType>
  modificationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>
  nuckname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  phone?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>
  providers?: Resolver<Array<ResolversTypes['Provider']>, ParentType, ContextType>
  storeBuckets?: Resolver<Maybe<Array<ResolversTypes['Bucket']>>, ParentType, ContextType>
  uniqueName?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  Bucket?: BucketResolvers<ContextType>
  Comment?: CommentResolvers<ContextType>
  Date?: GraphQLScalarType
  DateTime?: GraphQLScalarType
  EmailAddress?: GraphQLScalarType
  Feed?: FeedResolvers<ContextType>
  JWT?: GraphQLScalarType
  Menu?: MenuResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  News?: NewsResolvers<ContextType>
  NonEmptyString?: GraphQLScalarType
  Query?: QueryResolvers<ContextType>
  Store?: StoreResolvers<ContextType>
  Trend?: TrendResolvers<ContextType>
  URL?: GraphQLScalarType
  User?: UserResolvers<ContextType>
}
