import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
};

export type BooleanQueryOperatorInput = {
    eq?: Maybe<Scalars['Boolean']>;
    ne?: Maybe<Scalars['Boolean']>;
    in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
    eq?: Maybe<Scalars['Date']>;
    ne?: Maybe<Scalars['Date']>;
    gt?: Maybe<Scalars['Date']>;
    gte?: Maybe<Scalars['Date']>;
    lt?: Maybe<Scalars['Date']>;
    lte?: Maybe<Scalars['Date']>;
    in?: Maybe<Array<Maybe<Scalars['Date']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
    __typename?: 'Directory';
    sourceInstanceName: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
    extension: Scalars['String'];
    size: Scalars['Int'];
    prettySize: Scalars['String'];
    modifiedTime: Scalars['Date'];
    accessTime: Scalars['Date'];
    changeTime: Scalars['Date'];
    birthTime: Scalars['Date'];
    root: Scalars['String'];
    dir: Scalars['String'];
    base: Scalars['String'];
    ext: Scalars['String'];
    name: Scalars['String'];
    relativeDirectory: Scalars['String'];
    dev: Scalars['Int'];
    mode: Scalars['Int'];
    nlink: Scalars['Int'];
    uid: Scalars['Int'];
    gid: Scalars['Int'];
    rdev: Scalars['Int'];
    ino: Scalars['Float'];
    atimeMs: Scalars['Float'];
    mtimeMs: Scalars['Float'];
    ctimeMs: Scalars['Float'];
    atime: Scalars['Date'];
    mtime: Scalars['Date'];
    ctime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    birthtime?: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    birthtimeMs?: Maybe<Scalars['Float']>;
    blksize?: Maybe<Scalars['Int']>;
    blocks?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
    __typename?: 'DirectoryConnection';
    totalCount: Scalars['Int'];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
    field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
    __typename?: 'DirectoryEdge';
    next?: Maybe<Directory>;
    node: Directory;
    previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Ino = 'ino',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
    BirthtimeMs = 'birthtimeMs',
    Blksize = 'blksize',
    Blocks = 'blocks',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export type DirectoryFilterInput = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
    __typename?: 'DirectoryGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
    fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
    highlight: Scalars['String'];
    shadow: Scalars['String'];
    opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
    __typename?: 'File';
    sourceInstanceName: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
    extension: Scalars['String'];
    size: Scalars['Int'];
    prettySize: Scalars['String'];
    modifiedTime: Scalars['Date'];
    accessTime: Scalars['Date'];
    changeTime: Scalars['Date'];
    birthTime: Scalars['Date'];
    root: Scalars['String'];
    dir: Scalars['String'];
    base: Scalars['String'];
    ext: Scalars['String'];
    name: Scalars['String'];
    relativeDirectory: Scalars['String'];
    dev: Scalars['Int'];
    mode: Scalars['Int'];
    nlink: Scalars['Int'];
    uid: Scalars['Int'];
    gid: Scalars['Int'];
    rdev: Scalars['Int'];
    ino: Scalars['Float'];
    atimeMs: Scalars['Float'];
    mtimeMs: Scalars['Float'];
    ctimeMs: Scalars['Float'];
    atime: Scalars['Date'];
    mtime: Scalars['Date'];
    ctime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    birthtime?: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    birthtimeMs?: Maybe<Scalars['Float']>;
    blksize?: Maybe<Scalars['Int']>;
    blocks?: Maybe<Scalars['Int']>;
    /** Copy file to static directory and return public url to it */
    publicURL?: Maybe<Scalars['String']>;
    childImageSharp?: Maybe<ImageSharp>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type FileModifiedTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
    __typename?: 'FileConnection';
    totalCount: Scalars['Int'];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
    field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: FileFieldsEnum;
};

export type FileEdge = {
    __typename?: 'FileEdge';
    next?: Maybe<File>;
    node: File;
    previous?: Maybe<File>;
};

export enum FileFieldsEnum {
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Ino = 'ino',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
    BirthtimeMs = 'birthtimeMs',
    Blksize = 'blksize',
    Blocks = 'blocks',
    PublicUrl = 'publicURL',
    ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
    ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
    ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
    ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
    ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
    ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
    ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
    ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
    ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
    ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
    ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
    ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
    ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
    ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
    ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
    ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
    ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
    ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
    ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
    ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
    ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
    ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
    ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
    ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
    ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
    ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
    ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
    ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
    ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
    ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
    ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
    ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
    ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
    ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
    ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
    ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
    ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
    ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
    ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
    ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
    ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
    ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
    ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
    ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
    ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
    ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
    ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
    ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
    ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
    ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
    ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
    ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
    ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
    ChildImageSharpId = 'childImageSharp___id',
    ChildImageSharpParentId = 'childImageSharp___parent___id',
    ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
    ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
    ChildImageSharpParentChildren = 'childImageSharp___parent___children',
    ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
    ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
    ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
    ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
    ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
    ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
    ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
    ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
    ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
    ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
    ChildImageSharpChildren = 'childImageSharp___children',
    ChildImageSharpChildrenId = 'childImageSharp___children___id',
    ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
    ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
    ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
    ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
    ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
    ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
    ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
    ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
    ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
    ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
    ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
    ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
    ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
    ChildImageSharpInternalContent = 'childImageSharp___internal___content',
    ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
    ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
    ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
    ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
    ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
    ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
    ChildImageSharpInternalType = 'childImageSharp___internal___type',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    ChildMarkdownRemarkId = 'childMarkdownRemark___id',
    ChildMarkdownRemarkFrontmatterTitleEn = 'childMarkdownRemark___frontmatter___title___en',
    ChildMarkdownRemarkFrontmatterTitleTr = 'childMarkdownRemark___frontmatter___title___tr',
    ChildMarkdownRemarkFrontmatterTemplateKey = 'childMarkdownRemark___frontmatter___templateKey',
    ChildMarkdownRemarkFrontmatterSlugEn = 'childMarkdownRemark___frontmatter___slug___en',
    ChildMarkdownRemarkFrontmatterSlugTr = 'childMarkdownRemark___frontmatter___slug___tr',
    ChildMarkdownRemarkFrontmatterImageSourceInstanceName = 'childMarkdownRemark___frontmatter___image___sourceInstanceName',
    ChildMarkdownRemarkFrontmatterImageAbsolutePath = 'childMarkdownRemark___frontmatter___image___absolutePath',
    ChildMarkdownRemarkFrontmatterImageRelativePath = 'childMarkdownRemark___frontmatter___image___relativePath',
    ChildMarkdownRemarkFrontmatterImageExtension = 'childMarkdownRemark___frontmatter___image___extension',
    ChildMarkdownRemarkFrontmatterImageSize = 'childMarkdownRemark___frontmatter___image___size',
    ChildMarkdownRemarkFrontmatterImagePrettySize = 'childMarkdownRemark___frontmatter___image___prettySize',
    ChildMarkdownRemarkFrontmatterImageModifiedTime = 'childMarkdownRemark___frontmatter___image___modifiedTime',
    ChildMarkdownRemarkFrontmatterImageAccessTime = 'childMarkdownRemark___frontmatter___image___accessTime',
    ChildMarkdownRemarkFrontmatterImageChangeTime = 'childMarkdownRemark___frontmatter___image___changeTime',
    ChildMarkdownRemarkFrontmatterImageBirthTime = 'childMarkdownRemark___frontmatter___image___birthTime',
    ChildMarkdownRemarkFrontmatterImageRoot = 'childMarkdownRemark___frontmatter___image___root',
    ChildMarkdownRemarkFrontmatterImageDir = 'childMarkdownRemark___frontmatter___image___dir',
    ChildMarkdownRemarkFrontmatterImageBase = 'childMarkdownRemark___frontmatter___image___base',
    ChildMarkdownRemarkFrontmatterImageExt = 'childMarkdownRemark___frontmatter___image___ext',
    ChildMarkdownRemarkFrontmatterImageName = 'childMarkdownRemark___frontmatter___image___name',
    ChildMarkdownRemarkFrontmatterImageRelativeDirectory = 'childMarkdownRemark___frontmatter___image___relativeDirectory',
    ChildMarkdownRemarkFrontmatterImageDev = 'childMarkdownRemark___frontmatter___image___dev',
    ChildMarkdownRemarkFrontmatterImageMode = 'childMarkdownRemark___frontmatter___image___mode',
    ChildMarkdownRemarkFrontmatterImageNlink = 'childMarkdownRemark___frontmatter___image___nlink',
    ChildMarkdownRemarkFrontmatterImageUid = 'childMarkdownRemark___frontmatter___image___uid',
    ChildMarkdownRemarkFrontmatterImageGid = 'childMarkdownRemark___frontmatter___image___gid',
    ChildMarkdownRemarkFrontmatterImageRdev = 'childMarkdownRemark___frontmatter___image___rdev',
    ChildMarkdownRemarkFrontmatterImageIno = 'childMarkdownRemark___frontmatter___image___ino',
    ChildMarkdownRemarkFrontmatterImageAtimeMs = 'childMarkdownRemark___frontmatter___image___atimeMs',
    ChildMarkdownRemarkFrontmatterImageMtimeMs = 'childMarkdownRemark___frontmatter___image___mtimeMs',
    ChildMarkdownRemarkFrontmatterImageCtimeMs = 'childMarkdownRemark___frontmatter___image___ctimeMs',
    ChildMarkdownRemarkFrontmatterImageAtime = 'childMarkdownRemark___frontmatter___image___atime',
    ChildMarkdownRemarkFrontmatterImageMtime = 'childMarkdownRemark___frontmatter___image___mtime',
    ChildMarkdownRemarkFrontmatterImageCtime = 'childMarkdownRemark___frontmatter___image___ctime',
    ChildMarkdownRemarkFrontmatterImageBirthtime = 'childMarkdownRemark___frontmatter___image___birthtime',
    ChildMarkdownRemarkFrontmatterImageBirthtimeMs = 'childMarkdownRemark___frontmatter___image___birthtimeMs',
    ChildMarkdownRemarkFrontmatterImageBlksize = 'childMarkdownRemark___frontmatter___image___blksize',
    ChildMarkdownRemarkFrontmatterImageBlocks = 'childMarkdownRemark___frontmatter___image___blocks',
    ChildMarkdownRemarkFrontmatterImagePublicUrl = 'childMarkdownRemark___frontmatter___image___publicURL',
    ChildMarkdownRemarkFrontmatterImageId = 'childMarkdownRemark___frontmatter___image___id',
    ChildMarkdownRemarkFrontmatterImageChildren = 'childMarkdownRemark___frontmatter___image___children',
    ChildMarkdownRemarkFrontmatterHeading = 'childMarkdownRemark___frontmatter___heading',
    ChildMarkdownRemarkFrontmatterSubheading = 'childMarkdownRemark___frontmatter___subheading',
    ChildMarkdownRemarkFrontmatterMainpitchTitle = 'childMarkdownRemark___frontmatter___mainpitch___title',
    ChildMarkdownRemarkFrontmatterMainpitchDescription = 'childMarkdownRemark___frontmatter___mainpitch___description',
    ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
    ChildMarkdownRemarkFrontmatterIntroBlurbs = 'childMarkdownRemark___frontmatter___intro___blurbs',
    ChildMarkdownRemarkFrontmatterIntroHeading = 'childMarkdownRemark___frontmatter___intro___heading',
    ChildMarkdownRemarkFrontmatterIntroDescription = 'childMarkdownRemark___frontmatter___intro___description',
    ChildMarkdownRemarkFrontmatterMainHeading = 'childMarkdownRemark___frontmatter___main___heading',
    ChildMarkdownRemarkFrontmatterMainDescription = 'childMarkdownRemark___frontmatter___main___description',
    ChildMarkdownRemarkFrontmatterPath = 'childMarkdownRemark___frontmatter___path',
    ChildMarkdownRemarkFrontmatterTestimonials = 'childMarkdownRemark___frontmatter___testimonials',
    ChildMarkdownRemarkFrontmatterTestimonialsAuthor = 'childMarkdownRemark___frontmatter___testimonials___author',
    ChildMarkdownRemarkFrontmatterTestimonialsQuote = 'childMarkdownRemark___frontmatter___testimonials___quote',
    ChildMarkdownRemarkFrontmatterFullImageSourceInstanceName = 'childMarkdownRemark___frontmatter___full_image___sourceInstanceName',
    ChildMarkdownRemarkFrontmatterFullImageAbsolutePath = 'childMarkdownRemark___frontmatter___full_image___absolutePath',
    ChildMarkdownRemarkFrontmatterFullImageRelativePath = 'childMarkdownRemark___frontmatter___full_image___relativePath',
    ChildMarkdownRemarkFrontmatterFullImageExtension = 'childMarkdownRemark___frontmatter___full_image___extension',
    ChildMarkdownRemarkFrontmatterFullImageSize = 'childMarkdownRemark___frontmatter___full_image___size',
    ChildMarkdownRemarkFrontmatterFullImagePrettySize = 'childMarkdownRemark___frontmatter___full_image___prettySize',
    ChildMarkdownRemarkFrontmatterFullImageModifiedTime = 'childMarkdownRemark___frontmatter___full_image___modifiedTime',
    ChildMarkdownRemarkFrontmatterFullImageAccessTime = 'childMarkdownRemark___frontmatter___full_image___accessTime',
    ChildMarkdownRemarkFrontmatterFullImageChangeTime = 'childMarkdownRemark___frontmatter___full_image___changeTime',
    ChildMarkdownRemarkFrontmatterFullImageBirthTime = 'childMarkdownRemark___frontmatter___full_image___birthTime',
    ChildMarkdownRemarkFrontmatterFullImageRoot = 'childMarkdownRemark___frontmatter___full_image___root',
    ChildMarkdownRemarkFrontmatterFullImageDir = 'childMarkdownRemark___frontmatter___full_image___dir',
    ChildMarkdownRemarkFrontmatterFullImageBase = 'childMarkdownRemark___frontmatter___full_image___base',
    ChildMarkdownRemarkFrontmatterFullImageExt = 'childMarkdownRemark___frontmatter___full_image___ext',
    ChildMarkdownRemarkFrontmatterFullImageName = 'childMarkdownRemark___frontmatter___full_image___name',
    ChildMarkdownRemarkFrontmatterFullImageRelativeDirectory = 'childMarkdownRemark___frontmatter___full_image___relativeDirectory',
    ChildMarkdownRemarkFrontmatterFullImageDev = 'childMarkdownRemark___frontmatter___full_image___dev',
    ChildMarkdownRemarkFrontmatterFullImageMode = 'childMarkdownRemark___frontmatter___full_image___mode',
    ChildMarkdownRemarkFrontmatterFullImageNlink = 'childMarkdownRemark___frontmatter___full_image___nlink',
    ChildMarkdownRemarkFrontmatterFullImageUid = 'childMarkdownRemark___frontmatter___full_image___uid',
    ChildMarkdownRemarkFrontmatterFullImageGid = 'childMarkdownRemark___frontmatter___full_image___gid',
    ChildMarkdownRemarkFrontmatterFullImageRdev = 'childMarkdownRemark___frontmatter___full_image___rdev',
    ChildMarkdownRemarkFrontmatterFullImageIno = 'childMarkdownRemark___frontmatter___full_image___ino',
    ChildMarkdownRemarkFrontmatterFullImageAtimeMs = 'childMarkdownRemark___frontmatter___full_image___atimeMs',
    ChildMarkdownRemarkFrontmatterFullImageMtimeMs = 'childMarkdownRemark___frontmatter___full_image___mtimeMs',
    ChildMarkdownRemarkFrontmatterFullImageCtimeMs = 'childMarkdownRemark___frontmatter___full_image___ctimeMs',
    ChildMarkdownRemarkFrontmatterFullImageAtime = 'childMarkdownRemark___frontmatter___full_image___atime',
    ChildMarkdownRemarkFrontmatterFullImageMtime = 'childMarkdownRemark___frontmatter___full_image___mtime',
    ChildMarkdownRemarkFrontmatterFullImageCtime = 'childMarkdownRemark___frontmatter___full_image___ctime',
    ChildMarkdownRemarkFrontmatterFullImageBirthtime = 'childMarkdownRemark___frontmatter___full_image___birthtime',
    ChildMarkdownRemarkFrontmatterFullImageBirthtimeMs = 'childMarkdownRemark___frontmatter___full_image___birthtimeMs',
    ChildMarkdownRemarkFrontmatterFullImageBlksize = 'childMarkdownRemark___frontmatter___full_image___blksize',
    ChildMarkdownRemarkFrontmatterFullImageBlocks = 'childMarkdownRemark___frontmatter___full_image___blocks',
    ChildMarkdownRemarkFrontmatterFullImagePublicUrl = 'childMarkdownRemark___frontmatter___full_image___publicURL',
    ChildMarkdownRemarkFrontmatterFullImageId = 'childMarkdownRemark___frontmatter___full_image___id',
    ChildMarkdownRemarkFrontmatterFullImageChildren = 'childMarkdownRemark___frontmatter___full_image___children',
    ChildMarkdownRemarkFrontmatterPricingHeading = 'childMarkdownRemark___frontmatter___pricing___heading',
    ChildMarkdownRemarkFrontmatterPricingDescription = 'childMarkdownRemark___frontmatter___pricing___description',
    ChildMarkdownRemarkFrontmatterPricingPlans = 'childMarkdownRemark___frontmatter___pricing___plans',
    ChildMarkdownRemarkFrontmatterName = 'childMarkdownRemark___frontmatter___name',
    ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
    ChildMarkdownRemarkFrontmatterFeaturedpost = 'childMarkdownRemark___frontmatter___featuredpost',
    ChildMarkdownRemarkFrontmatterFeaturedimageSourceInstanceName = 'childMarkdownRemark___frontmatter___featuredimage___sourceInstanceName',
    ChildMarkdownRemarkFrontmatterFeaturedimageAbsolutePath = 'childMarkdownRemark___frontmatter___featuredimage___absolutePath',
    ChildMarkdownRemarkFrontmatterFeaturedimageRelativePath = 'childMarkdownRemark___frontmatter___featuredimage___relativePath',
    ChildMarkdownRemarkFrontmatterFeaturedimageExtension = 'childMarkdownRemark___frontmatter___featuredimage___extension',
    ChildMarkdownRemarkFrontmatterFeaturedimageSize = 'childMarkdownRemark___frontmatter___featuredimage___size',
    ChildMarkdownRemarkFrontmatterFeaturedimagePrettySize = 'childMarkdownRemark___frontmatter___featuredimage___prettySize',
    ChildMarkdownRemarkFrontmatterFeaturedimageModifiedTime = 'childMarkdownRemark___frontmatter___featuredimage___modifiedTime',
    ChildMarkdownRemarkFrontmatterFeaturedimageAccessTime = 'childMarkdownRemark___frontmatter___featuredimage___accessTime',
    ChildMarkdownRemarkFrontmatterFeaturedimageChangeTime = 'childMarkdownRemark___frontmatter___featuredimage___changeTime',
    ChildMarkdownRemarkFrontmatterFeaturedimageBirthTime = 'childMarkdownRemark___frontmatter___featuredimage___birthTime',
    ChildMarkdownRemarkFrontmatterFeaturedimageRoot = 'childMarkdownRemark___frontmatter___featuredimage___root',
    ChildMarkdownRemarkFrontmatterFeaturedimageDir = 'childMarkdownRemark___frontmatter___featuredimage___dir',
    ChildMarkdownRemarkFrontmatterFeaturedimageBase = 'childMarkdownRemark___frontmatter___featuredimage___base',
    ChildMarkdownRemarkFrontmatterFeaturedimageExt = 'childMarkdownRemark___frontmatter___featuredimage___ext',
    ChildMarkdownRemarkFrontmatterFeaturedimageName = 'childMarkdownRemark___frontmatter___featuredimage___name',
    ChildMarkdownRemarkFrontmatterFeaturedimageRelativeDirectory = 'childMarkdownRemark___frontmatter___featuredimage___relativeDirectory',
    ChildMarkdownRemarkFrontmatterFeaturedimageDev = 'childMarkdownRemark___frontmatter___featuredimage___dev',
    ChildMarkdownRemarkFrontmatterFeaturedimageMode = 'childMarkdownRemark___frontmatter___featuredimage___mode',
    ChildMarkdownRemarkFrontmatterFeaturedimageNlink = 'childMarkdownRemark___frontmatter___featuredimage___nlink',
    ChildMarkdownRemarkFrontmatterFeaturedimageUid = 'childMarkdownRemark___frontmatter___featuredimage___uid',
    ChildMarkdownRemarkFrontmatterFeaturedimageGid = 'childMarkdownRemark___frontmatter___featuredimage___gid',
    ChildMarkdownRemarkFrontmatterFeaturedimageRdev = 'childMarkdownRemark___frontmatter___featuredimage___rdev',
    ChildMarkdownRemarkFrontmatterFeaturedimageIno = 'childMarkdownRemark___frontmatter___featuredimage___ino',
    ChildMarkdownRemarkFrontmatterFeaturedimageAtimeMs = 'childMarkdownRemark___frontmatter___featuredimage___atimeMs',
    ChildMarkdownRemarkFrontmatterFeaturedimageMtimeMs = 'childMarkdownRemark___frontmatter___featuredimage___mtimeMs',
    ChildMarkdownRemarkFrontmatterFeaturedimageCtimeMs = 'childMarkdownRemark___frontmatter___featuredimage___ctimeMs',
    ChildMarkdownRemarkFrontmatterFeaturedimageAtime = 'childMarkdownRemark___frontmatter___featuredimage___atime',
    ChildMarkdownRemarkFrontmatterFeaturedimageMtime = 'childMarkdownRemark___frontmatter___featuredimage___mtime',
    ChildMarkdownRemarkFrontmatterFeaturedimageCtime = 'childMarkdownRemark___frontmatter___featuredimage___ctime',
    ChildMarkdownRemarkFrontmatterFeaturedimageBirthtime = 'childMarkdownRemark___frontmatter___featuredimage___birthtime',
    ChildMarkdownRemarkFrontmatterFeaturedimageBirthtimeMs = 'childMarkdownRemark___frontmatter___featuredimage___birthtimeMs',
    ChildMarkdownRemarkFrontmatterFeaturedimageBlksize = 'childMarkdownRemark___frontmatter___featuredimage___blksize',
    ChildMarkdownRemarkFrontmatterFeaturedimageBlocks = 'childMarkdownRemark___frontmatter___featuredimage___blocks',
    ChildMarkdownRemarkFrontmatterFeaturedimagePublicUrl = 'childMarkdownRemark___frontmatter___featuredimage___publicURL',
    ChildMarkdownRemarkFrontmatterFeaturedimageId = 'childMarkdownRemark___frontmatter___featuredimage___id',
    ChildMarkdownRemarkFrontmatterFeaturedimageChildren = 'childMarkdownRemark___frontmatter___featuredimage___children',
    ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
    ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
    ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
    ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
    ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
    ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
    ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
    ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
    ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
    ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
    ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
    ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
    ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
    ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
    ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
    ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
    ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
    ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
    ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
    ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
    ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
    ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
    ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
    ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
    ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
    ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
    ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
    ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
    ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
    ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
    ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
    ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
    ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
    ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
    ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
    ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
    ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
    ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
    ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
    ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
    ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
    ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
    ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
    ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
    ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
    ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
    ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
    ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
    ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
    ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
    ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
    ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
    ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
    ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
}

export type FileFilterInput = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type FileGroupConnection = {
    __typename?: 'FileGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
    fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
    eq?: Maybe<Scalars['Float']>;
    ne?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    in?: Maybe<Array<Maybe<Scalars['Float']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
    Center = 'CENTER',
    North = 'NORTH',
    Northeast = 'NORTHEAST',
    East = 'EAST',
    Southeast = 'SOUTHEAST',
    South = 'SOUTH',
    Southwest = 'SOUTHWEST',
    West = 'WEST',
    Northwest = 'NORTHWEST',
    Entropy = 'ENTROPY',
    Attention = 'ATTENTION',
}

export enum ImageFit {
    Cover = 'COVER',
    Contain = 'CONTAIN',
    Fill = 'FILL',
    Inside = 'INSIDE',
    Outside = 'OUTSIDE',
}

export enum ImageFormat {
    NoChange = 'NO_CHANGE',
    Jpg = 'JPG',
    Png = 'PNG',
    Webp = 'WEBP',
}

export type ImageSharp = Node & {
    __typename?: 'ImageSharp';
    fixed?: Maybe<ImageSharpFixed>;
    /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
    resolutions?: Maybe<ImageSharpResolutions>;
    fluid?: Maybe<ImageSharpFluid>;
    /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
    sizes?: Maybe<ImageSharpSizes>;
    original?: Maybe<ImageSharpOriginal>;
    resize?: Maybe<ImageSharpResize>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type ImageSharpFixedArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpResolutionsArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpSizesArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpResizeArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionLevel?: Maybe<Scalars['Int']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    base64?: Maybe<Scalars['Boolean']>;
    traceSVG?: Maybe<Potrace>;
    toFormat?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
    __typename?: 'ImageSharpConnection';
    totalCount: Scalars['Int'];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
    field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
    __typename?: 'ImageSharpEdge';
    next?: Maybe<ImageSharp>;
    node: ImageSharp;
    previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
    FixedBase64 = 'fixed___base64',
    FixedTracedSvg = 'fixed___tracedSVG',
    FixedAspectRatio = 'fixed___aspectRatio',
    FixedWidth = 'fixed___width',
    FixedHeight = 'fixed___height',
    FixedSrc = 'fixed___src',
    FixedSrcSet = 'fixed___srcSet',
    FixedSrcWebp = 'fixed___srcWebp',
    FixedSrcSetWebp = 'fixed___srcSetWebp',
    FixedOriginalName = 'fixed___originalName',
    ResolutionsBase64 = 'resolutions___base64',
    ResolutionsTracedSvg = 'resolutions___tracedSVG',
    ResolutionsAspectRatio = 'resolutions___aspectRatio',
    ResolutionsWidth = 'resolutions___width',
    ResolutionsHeight = 'resolutions___height',
    ResolutionsSrc = 'resolutions___src',
    ResolutionsSrcSet = 'resolutions___srcSet',
    ResolutionsSrcWebp = 'resolutions___srcWebp',
    ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
    ResolutionsOriginalName = 'resolutions___originalName',
    FluidBase64 = 'fluid___base64',
    FluidTracedSvg = 'fluid___tracedSVG',
    FluidAspectRatio = 'fluid___aspectRatio',
    FluidSrc = 'fluid___src',
    FluidSrcSet = 'fluid___srcSet',
    FluidSrcWebp = 'fluid___srcWebp',
    FluidSrcSetWebp = 'fluid___srcSetWebp',
    FluidSizes = 'fluid___sizes',
    FluidOriginalImg = 'fluid___originalImg',
    FluidOriginalName = 'fluid___originalName',
    FluidPresentationWidth = 'fluid___presentationWidth',
    FluidPresentationHeight = 'fluid___presentationHeight',
    SizesBase64 = 'sizes___base64',
    SizesTracedSvg = 'sizes___tracedSVG',
    SizesAspectRatio = 'sizes___aspectRatio',
    SizesSrc = 'sizes___src',
    SizesSrcSet = 'sizes___srcSet',
    SizesSrcWebp = 'sizes___srcWebp',
    SizesSrcSetWebp = 'sizes___srcSetWebp',
    SizesSizes = 'sizes___sizes',
    SizesOriginalImg = 'sizes___originalImg',
    SizesOriginalName = 'sizes___originalName',
    SizesPresentationWidth = 'sizes___presentationWidth',
    SizesPresentationHeight = 'sizes___presentationHeight',
    OriginalWidth = 'original___width',
    OriginalHeight = 'original___height',
    OriginalSrc = 'original___src',
    ResizeSrc = 'resize___src',
    ResizeTracedSvg = 'resize___tracedSVG',
    ResizeWidth = 'resize___width',
    ResizeHeight = 'resize___height',
    ResizeAspectRatio = 'resize___aspectRatio',
    ResizeOriginalName = 'resize___originalName',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export type ImageSharpFilterInput = {
    fixed?: Maybe<ImageSharpFixedFilterInput>;
    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
    fluid?: Maybe<ImageSharpFluidFilterInput>;
    sizes?: Maybe<ImageSharpSizesFilterInput>;
    original?: Maybe<ImageSharpOriginalFilterInput>;
    resize?: Maybe<ImageSharpResizeFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
    __typename?: 'ImageSharpFixed';
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    width: Scalars['Float'];
    height: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
    __typename?: 'ImageSharpFluid';
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    sizes: Scalars['String'];
    originalImg?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
    presentationWidth: Scalars['Int'];
    presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalImg?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
    presentationWidth?: Maybe<IntQueryOperatorInput>;
    presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
    __typename?: 'ImageSharpGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
    __typename?: 'ImageSharpOriginal';
    width?: Maybe<Scalars['Float']>;
    height?: Maybe<Scalars['Float']>;
    src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
    __typename?: 'ImageSharpResize';
    src?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
    src?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    width?: Maybe<IntQueryOperatorInput>;
    height?: Maybe<IntQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
    __typename?: 'ImageSharpResolutions';
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    width: Scalars['Float'];
    height: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
    __typename?: 'ImageSharpSizes';
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    sizes: Scalars['String'];
    originalImg?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
    presentationWidth: Scalars['Int'];
    presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalImg?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
    presentationWidth?: Maybe<IntQueryOperatorInput>;
    presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
    fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
    __typename?: 'Internal';
    content?: Maybe<Scalars['String']>;
    contentDigest: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
    ignoreType?: Maybe<Scalars['Boolean']>;
    mediaType?: Maybe<Scalars['String']>;
    owner: Scalars['String'];
    type: Scalars['String'];
};

export type InternalFilterInput = {
    content?: Maybe<StringQueryOperatorInput>;
    contentDigest?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    fieldOwners?: Maybe<StringQueryOperatorInput>;
    ignoreType?: Maybe<BooleanQueryOperatorInput>;
    mediaType?: Maybe<StringQueryOperatorInput>;
    owner?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
    eq?: Maybe<Scalars['Int']>;
    ne?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Maybe<Scalars['Int']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JsonQueryOperatorInput = {
    eq?: Maybe<Scalars['JSON']>;
    ne?: Maybe<Scalars['JSON']>;
    in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
    nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
    regex?: Maybe<Scalars['JSON']>;
    glob?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
    Plain = 'PLAIN',
    Html = 'HTML',
    Markdown = 'MARKDOWN',
}

export type MarkdownHeading = {
    __typename?: 'MarkdownHeading';
    id?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    value?: Maybe<StringQueryOperatorInput>;
    depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
    elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export type MarkdownRemark = Node & {
    __typename?: 'MarkdownRemark';
    id: Scalars['ID'];
    frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
    excerpt?: Maybe<Scalars['String']>;
    rawMarkdownBody?: Maybe<Scalars['String']>;
    fileAbsolutePath?: Maybe<Scalars['String']>;
    fields?: Maybe<MarkdownRemarkFields>;
    html?: Maybe<Scalars['String']>;
    htmlAst?: Maybe<Scalars['JSON']>;
    excerptAst?: Maybe<Scalars['JSON']>;
    headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
    timeToRead?: Maybe<Scalars['Int']>;
    tableOfContents?: Maybe<Scalars['String']>;
    wordCount?: Maybe<MarkdownWordCount>;
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type MarkdownRemarkExcerptArgs = {
    pruneLength?: Maybe<Scalars['Int']>;
    truncate?: Maybe<Scalars['Boolean']>;
    format?: Maybe<MarkdownExcerptFormats>;
};

export type MarkdownRemarkExcerptAstArgs = {
    pruneLength?: Maybe<Scalars['Int']>;
    truncate?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkHeadingsArgs = {
    depth?: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarkTableOfContentsArgs = {
    absolute?: Maybe<Scalars['Boolean']>;
    pathToSlugField?: Maybe<Scalars['String']>;
    maxDepth?: Maybe<Scalars['Int']>;
    heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
    __typename?: 'MarkdownRemarkConnection';
    totalCount: Scalars['Int'];
    edges: Array<MarkdownRemarkEdge>;
    nodes: Array<MarkdownRemark>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<MarkdownRemarkGroupConnection>;
};

export type MarkdownRemarkConnectionDistinctArgs = {
    field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
    __typename?: 'MarkdownRemarkEdge';
    next?: Maybe<MarkdownRemark>;
    node: MarkdownRemark;
    previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
    __typename?: 'MarkdownRemarkFields';
    slug?: Maybe<Scalars['String']>;
};

export enum MarkdownRemarkFieldsEnum {
    Id = 'id',
    FrontmatterTitleEn = 'frontmatter___title___en',
    FrontmatterTitleTr = 'frontmatter___title___tr',
    FrontmatterTemplateKey = 'frontmatter___templateKey',
    FrontmatterSlugEn = 'frontmatter___slug___en',
    FrontmatterSlugTr = 'frontmatter___slug___tr',
    FrontmatterImageSourceInstanceName = 'frontmatter___image___sourceInstanceName',
    FrontmatterImageAbsolutePath = 'frontmatter___image___absolutePath',
    FrontmatterImageRelativePath = 'frontmatter___image___relativePath',
    FrontmatterImageExtension = 'frontmatter___image___extension',
    FrontmatterImageSize = 'frontmatter___image___size',
    FrontmatterImagePrettySize = 'frontmatter___image___prettySize',
    FrontmatterImageModifiedTime = 'frontmatter___image___modifiedTime',
    FrontmatterImageAccessTime = 'frontmatter___image___accessTime',
    FrontmatterImageChangeTime = 'frontmatter___image___changeTime',
    FrontmatterImageBirthTime = 'frontmatter___image___birthTime',
    FrontmatterImageRoot = 'frontmatter___image___root',
    FrontmatterImageDir = 'frontmatter___image___dir',
    FrontmatterImageBase = 'frontmatter___image___base',
    FrontmatterImageExt = 'frontmatter___image___ext',
    FrontmatterImageName = 'frontmatter___image___name',
    FrontmatterImageRelativeDirectory = 'frontmatter___image___relativeDirectory',
    FrontmatterImageDev = 'frontmatter___image___dev',
    FrontmatterImageMode = 'frontmatter___image___mode',
    FrontmatterImageNlink = 'frontmatter___image___nlink',
    FrontmatterImageUid = 'frontmatter___image___uid',
    FrontmatterImageGid = 'frontmatter___image___gid',
    FrontmatterImageRdev = 'frontmatter___image___rdev',
    FrontmatterImageIno = 'frontmatter___image___ino',
    FrontmatterImageAtimeMs = 'frontmatter___image___atimeMs',
    FrontmatterImageMtimeMs = 'frontmatter___image___mtimeMs',
    FrontmatterImageCtimeMs = 'frontmatter___image___ctimeMs',
    FrontmatterImageAtime = 'frontmatter___image___atime',
    FrontmatterImageMtime = 'frontmatter___image___mtime',
    FrontmatterImageCtime = 'frontmatter___image___ctime',
    FrontmatterImageBirthtime = 'frontmatter___image___birthtime',
    FrontmatterImageBirthtimeMs = 'frontmatter___image___birthtimeMs',
    FrontmatterImageBlksize = 'frontmatter___image___blksize',
    FrontmatterImageBlocks = 'frontmatter___image___blocks',
    FrontmatterImagePublicUrl = 'frontmatter___image___publicURL',
    FrontmatterImageChildImageSharpId = 'frontmatter___image___childImageSharp___id',
    FrontmatterImageChildImageSharpChildren = 'frontmatter___image___childImageSharp___children',
    FrontmatterImageId = 'frontmatter___image___id',
    FrontmatterImageParentId = 'frontmatter___image___parent___id',
    FrontmatterImageParentChildren = 'frontmatter___image___parent___children',
    FrontmatterImageChildren = 'frontmatter___image___children',
    FrontmatterImageChildrenId = 'frontmatter___image___children___id',
    FrontmatterImageChildrenChildren = 'frontmatter___image___children___children',
    FrontmatterImageInternalContent = 'frontmatter___image___internal___content',
    FrontmatterImageInternalContentDigest = 'frontmatter___image___internal___contentDigest',
    FrontmatterImageInternalDescription = 'frontmatter___image___internal___description',
    FrontmatterImageInternalFieldOwners = 'frontmatter___image___internal___fieldOwners',
    FrontmatterImageInternalIgnoreType = 'frontmatter___image___internal___ignoreType',
    FrontmatterImageInternalMediaType = 'frontmatter___image___internal___mediaType',
    FrontmatterImageInternalOwner = 'frontmatter___image___internal___owner',
    FrontmatterImageInternalType = 'frontmatter___image___internal___type',
    FrontmatterImageChildMarkdownRemarkId = 'frontmatter___image___childMarkdownRemark___id',
    FrontmatterImageChildMarkdownRemarkExcerpt = 'frontmatter___image___childMarkdownRemark___excerpt',
    FrontmatterImageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___image___childMarkdownRemark___rawMarkdownBody',
    FrontmatterImageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___image___childMarkdownRemark___fileAbsolutePath',
    FrontmatterImageChildMarkdownRemarkHtml = 'frontmatter___image___childMarkdownRemark___html',
    FrontmatterImageChildMarkdownRemarkHtmlAst = 'frontmatter___image___childMarkdownRemark___htmlAst',
    FrontmatterImageChildMarkdownRemarkExcerptAst = 'frontmatter___image___childMarkdownRemark___excerptAst',
    FrontmatterImageChildMarkdownRemarkHeadings = 'frontmatter___image___childMarkdownRemark___headings',
    FrontmatterImageChildMarkdownRemarkTimeToRead = 'frontmatter___image___childMarkdownRemark___timeToRead',
    FrontmatterImageChildMarkdownRemarkTableOfContents = 'frontmatter___image___childMarkdownRemark___tableOfContents',
    FrontmatterImageChildMarkdownRemarkChildren = 'frontmatter___image___childMarkdownRemark___children',
    FrontmatterHeading = 'frontmatter___heading',
    FrontmatterSubheading = 'frontmatter___subheading',
    FrontmatterMainpitchTitle = 'frontmatter___mainpitch___title',
    FrontmatterMainpitchDescription = 'frontmatter___mainpitch___description',
    FrontmatterDescription = 'frontmatter___description',
    FrontmatterIntroBlurbs = 'frontmatter___intro___blurbs',
    FrontmatterIntroBlurbsText = 'frontmatter___intro___blurbs___text',
    FrontmatterIntroHeading = 'frontmatter___intro___heading',
    FrontmatterIntroDescription = 'frontmatter___intro___description',
    FrontmatterMainHeading = 'frontmatter___main___heading',
    FrontmatterMainDescription = 'frontmatter___main___description',
    FrontmatterMainImage1Alt = 'frontmatter___main___image1___alt',
    FrontmatterMainImage2Alt = 'frontmatter___main___image2___alt',
    FrontmatterMainImage3Alt = 'frontmatter___main___image3___alt',
    FrontmatterPath = 'frontmatter___path',
    FrontmatterTestimonials = 'frontmatter___testimonials',
    FrontmatterTestimonialsAuthor = 'frontmatter___testimonials___author',
    FrontmatterTestimonialsQuote = 'frontmatter___testimonials___quote',
    FrontmatterFullImageSourceInstanceName = 'frontmatter___full_image___sourceInstanceName',
    FrontmatterFullImageAbsolutePath = 'frontmatter___full_image___absolutePath',
    FrontmatterFullImageRelativePath = 'frontmatter___full_image___relativePath',
    FrontmatterFullImageExtension = 'frontmatter___full_image___extension',
    FrontmatterFullImageSize = 'frontmatter___full_image___size',
    FrontmatterFullImagePrettySize = 'frontmatter___full_image___prettySize',
    FrontmatterFullImageModifiedTime = 'frontmatter___full_image___modifiedTime',
    FrontmatterFullImageAccessTime = 'frontmatter___full_image___accessTime',
    FrontmatterFullImageChangeTime = 'frontmatter___full_image___changeTime',
    FrontmatterFullImageBirthTime = 'frontmatter___full_image___birthTime',
    FrontmatterFullImageRoot = 'frontmatter___full_image___root',
    FrontmatterFullImageDir = 'frontmatter___full_image___dir',
    FrontmatterFullImageBase = 'frontmatter___full_image___base',
    FrontmatterFullImageExt = 'frontmatter___full_image___ext',
    FrontmatterFullImageName = 'frontmatter___full_image___name',
    FrontmatterFullImageRelativeDirectory = 'frontmatter___full_image___relativeDirectory',
    FrontmatterFullImageDev = 'frontmatter___full_image___dev',
    FrontmatterFullImageMode = 'frontmatter___full_image___mode',
    FrontmatterFullImageNlink = 'frontmatter___full_image___nlink',
    FrontmatterFullImageUid = 'frontmatter___full_image___uid',
    FrontmatterFullImageGid = 'frontmatter___full_image___gid',
    FrontmatterFullImageRdev = 'frontmatter___full_image___rdev',
    FrontmatterFullImageIno = 'frontmatter___full_image___ino',
    FrontmatterFullImageAtimeMs = 'frontmatter___full_image___atimeMs',
    FrontmatterFullImageMtimeMs = 'frontmatter___full_image___mtimeMs',
    FrontmatterFullImageCtimeMs = 'frontmatter___full_image___ctimeMs',
    FrontmatterFullImageAtime = 'frontmatter___full_image___atime',
    FrontmatterFullImageMtime = 'frontmatter___full_image___mtime',
    FrontmatterFullImageCtime = 'frontmatter___full_image___ctime',
    FrontmatterFullImageBirthtime = 'frontmatter___full_image___birthtime',
    FrontmatterFullImageBirthtimeMs = 'frontmatter___full_image___birthtimeMs',
    FrontmatterFullImageBlksize = 'frontmatter___full_image___blksize',
    FrontmatterFullImageBlocks = 'frontmatter___full_image___blocks',
    FrontmatterFullImagePublicUrl = 'frontmatter___full_image___publicURL',
    FrontmatterFullImageChildImageSharpId = 'frontmatter___full_image___childImageSharp___id',
    FrontmatterFullImageChildImageSharpChildren = 'frontmatter___full_image___childImageSharp___children',
    FrontmatterFullImageId = 'frontmatter___full_image___id',
    FrontmatterFullImageParentId = 'frontmatter___full_image___parent___id',
    FrontmatterFullImageParentChildren = 'frontmatter___full_image___parent___children',
    FrontmatterFullImageChildren = 'frontmatter___full_image___children',
    FrontmatterFullImageChildrenId = 'frontmatter___full_image___children___id',
    FrontmatterFullImageChildrenChildren = 'frontmatter___full_image___children___children',
    FrontmatterFullImageInternalContent = 'frontmatter___full_image___internal___content',
    FrontmatterFullImageInternalContentDigest = 'frontmatter___full_image___internal___contentDigest',
    FrontmatterFullImageInternalDescription = 'frontmatter___full_image___internal___description',
    FrontmatterFullImageInternalFieldOwners = 'frontmatter___full_image___internal___fieldOwners',
    FrontmatterFullImageInternalIgnoreType = 'frontmatter___full_image___internal___ignoreType',
    FrontmatterFullImageInternalMediaType = 'frontmatter___full_image___internal___mediaType',
    FrontmatterFullImageInternalOwner = 'frontmatter___full_image___internal___owner',
    FrontmatterFullImageInternalType = 'frontmatter___full_image___internal___type',
    FrontmatterFullImageChildMarkdownRemarkId = 'frontmatter___full_image___childMarkdownRemark___id',
    FrontmatterFullImageChildMarkdownRemarkExcerpt = 'frontmatter___full_image___childMarkdownRemark___excerpt',
    FrontmatterFullImageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___full_image___childMarkdownRemark___rawMarkdownBody',
    FrontmatterFullImageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___full_image___childMarkdownRemark___fileAbsolutePath',
    FrontmatterFullImageChildMarkdownRemarkHtml = 'frontmatter___full_image___childMarkdownRemark___html',
    FrontmatterFullImageChildMarkdownRemarkHtmlAst = 'frontmatter___full_image___childMarkdownRemark___htmlAst',
    FrontmatterFullImageChildMarkdownRemarkExcerptAst = 'frontmatter___full_image___childMarkdownRemark___excerptAst',
    FrontmatterFullImageChildMarkdownRemarkHeadings = 'frontmatter___full_image___childMarkdownRemark___headings',
    FrontmatterFullImageChildMarkdownRemarkTimeToRead = 'frontmatter___full_image___childMarkdownRemark___timeToRead',
    FrontmatterFullImageChildMarkdownRemarkTableOfContents = 'frontmatter___full_image___childMarkdownRemark___tableOfContents',
    FrontmatterFullImageChildMarkdownRemarkChildren = 'frontmatter___full_image___childMarkdownRemark___children',
    FrontmatterPricingHeading = 'frontmatter___pricing___heading',
    FrontmatterPricingDescription = 'frontmatter___pricing___description',
    FrontmatterPricingPlans = 'frontmatter___pricing___plans',
    FrontmatterPricingPlansDescription = 'frontmatter___pricing___plans___description',
    FrontmatterPricingPlansItems = 'frontmatter___pricing___plans___items',
    FrontmatterPricingPlansPlan = 'frontmatter___pricing___plans___plan',
    FrontmatterPricingPlansPrice = 'frontmatter___pricing___plans___price',
    FrontmatterName = 'frontmatter___name',
    FrontmatterDate = 'frontmatter___date',
    FrontmatterFeaturedpost = 'frontmatter___featuredpost',
    FrontmatterFeaturedimageSourceInstanceName = 'frontmatter___featuredimage___sourceInstanceName',
    FrontmatterFeaturedimageAbsolutePath = 'frontmatter___featuredimage___absolutePath',
    FrontmatterFeaturedimageRelativePath = 'frontmatter___featuredimage___relativePath',
    FrontmatterFeaturedimageExtension = 'frontmatter___featuredimage___extension',
    FrontmatterFeaturedimageSize = 'frontmatter___featuredimage___size',
    FrontmatterFeaturedimagePrettySize = 'frontmatter___featuredimage___prettySize',
    FrontmatterFeaturedimageModifiedTime = 'frontmatter___featuredimage___modifiedTime',
    FrontmatterFeaturedimageAccessTime = 'frontmatter___featuredimage___accessTime',
    FrontmatterFeaturedimageChangeTime = 'frontmatter___featuredimage___changeTime',
    FrontmatterFeaturedimageBirthTime = 'frontmatter___featuredimage___birthTime',
    FrontmatterFeaturedimageRoot = 'frontmatter___featuredimage___root',
    FrontmatterFeaturedimageDir = 'frontmatter___featuredimage___dir',
    FrontmatterFeaturedimageBase = 'frontmatter___featuredimage___base',
    FrontmatterFeaturedimageExt = 'frontmatter___featuredimage___ext',
    FrontmatterFeaturedimageName = 'frontmatter___featuredimage___name',
    FrontmatterFeaturedimageRelativeDirectory = 'frontmatter___featuredimage___relativeDirectory',
    FrontmatterFeaturedimageDev = 'frontmatter___featuredimage___dev',
    FrontmatterFeaturedimageMode = 'frontmatter___featuredimage___mode',
    FrontmatterFeaturedimageNlink = 'frontmatter___featuredimage___nlink',
    FrontmatterFeaturedimageUid = 'frontmatter___featuredimage___uid',
    FrontmatterFeaturedimageGid = 'frontmatter___featuredimage___gid',
    FrontmatterFeaturedimageRdev = 'frontmatter___featuredimage___rdev',
    FrontmatterFeaturedimageIno = 'frontmatter___featuredimage___ino',
    FrontmatterFeaturedimageAtimeMs = 'frontmatter___featuredimage___atimeMs',
    FrontmatterFeaturedimageMtimeMs = 'frontmatter___featuredimage___mtimeMs',
    FrontmatterFeaturedimageCtimeMs = 'frontmatter___featuredimage___ctimeMs',
    FrontmatterFeaturedimageAtime = 'frontmatter___featuredimage___atime',
    FrontmatterFeaturedimageMtime = 'frontmatter___featuredimage___mtime',
    FrontmatterFeaturedimageCtime = 'frontmatter___featuredimage___ctime',
    FrontmatterFeaturedimageBirthtime = 'frontmatter___featuredimage___birthtime',
    FrontmatterFeaturedimageBirthtimeMs = 'frontmatter___featuredimage___birthtimeMs',
    FrontmatterFeaturedimageBlksize = 'frontmatter___featuredimage___blksize',
    FrontmatterFeaturedimageBlocks = 'frontmatter___featuredimage___blocks',
    FrontmatterFeaturedimagePublicUrl = 'frontmatter___featuredimage___publicURL',
    FrontmatterFeaturedimageChildImageSharpId = 'frontmatter___featuredimage___childImageSharp___id',
    FrontmatterFeaturedimageChildImageSharpChildren = 'frontmatter___featuredimage___childImageSharp___children',
    FrontmatterFeaturedimageId = 'frontmatter___featuredimage___id',
    FrontmatterFeaturedimageParentId = 'frontmatter___featuredimage___parent___id',
    FrontmatterFeaturedimageParentChildren = 'frontmatter___featuredimage___parent___children',
    FrontmatterFeaturedimageChildren = 'frontmatter___featuredimage___children',
    FrontmatterFeaturedimageChildrenId = 'frontmatter___featuredimage___children___id',
    FrontmatterFeaturedimageChildrenChildren = 'frontmatter___featuredimage___children___children',
    FrontmatterFeaturedimageInternalContent = 'frontmatter___featuredimage___internal___content',
    FrontmatterFeaturedimageInternalContentDigest = 'frontmatter___featuredimage___internal___contentDigest',
    FrontmatterFeaturedimageInternalDescription = 'frontmatter___featuredimage___internal___description',
    FrontmatterFeaturedimageInternalFieldOwners = 'frontmatter___featuredimage___internal___fieldOwners',
    FrontmatterFeaturedimageInternalIgnoreType = 'frontmatter___featuredimage___internal___ignoreType',
    FrontmatterFeaturedimageInternalMediaType = 'frontmatter___featuredimage___internal___mediaType',
    FrontmatterFeaturedimageInternalOwner = 'frontmatter___featuredimage___internal___owner',
    FrontmatterFeaturedimageInternalType = 'frontmatter___featuredimage___internal___type',
    FrontmatterFeaturedimageChildMarkdownRemarkId = 'frontmatter___featuredimage___childMarkdownRemark___id',
    FrontmatterFeaturedimageChildMarkdownRemarkExcerpt = 'frontmatter___featuredimage___childMarkdownRemark___excerpt',
    FrontmatterFeaturedimageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___featuredimage___childMarkdownRemark___rawMarkdownBody',
    FrontmatterFeaturedimageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___featuredimage___childMarkdownRemark___fileAbsolutePath',
    FrontmatterFeaturedimageChildMarkdownRemarkHtml = 'frontmatter___featuredimage___childMarkdownRemark___html',
    FrontmatterFeaturedimageChildMarkdownRemarkHtmlAst = 'frontmatter___featuredimage___childMarkdownRemark___htmlAst',
    FrontmatterFeaturedimageChildMarkdownRemarkExcerptAst = 'frontmatter___featuredimage___childMarkdownRemark___excerptAst',
    FrontmatterFeaturedimageChildMarkdownRemarkHeadings = 'frontmatter___featuredimage___childMarkdownRemark___headings',
    FrontmatterFeaturedimageChildMarkdownRemarkTimeToRead = 'frontmatter___featuredimage___childMarkdownRemark___timeToRead',
    FrontmatterFeaturedimageChildMarkdownRemarkTableOfContents = 'frontmatter___featuredimage___childMarkdownRemark___tableOfContents',
    FrontmatterFeaturedimageChildMarkdownRemarkChildren = 'frontmatter___featuredimage___childMarkdownRemark___children',
    FrontmatterTags = 'frontmatter___tags',
    Excerpt = 'excerpt',
    RawMarkdownBody = 'rawMarkdownBody',
    FileAbsolutePath = 'fileAbsolutePath',
    FieldsSlug = 'fields___slug',
    Html = 'html',
    HtmlAst = 'htmlAst',
    ExcerptAst = 'excerptAst',
    Headings = 'headings',
    HeadingsId = 'headings___id',
    HeadingsValue = 'headings___value',
    HeadingsDepth = 'headings___depth',
    TimeToRead = 'timeToRead',
    TableOfContents = 'tableOfContents',
    WordCountParagraphs = 'wordCount___paragraphs',
    WordCountSentences = 'wordCount___sentences',
    WordCountWords = 'wordCount___words',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export type MarkdownRemarkFieldsFilterInput = {
    slug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<MarkdownWordCountFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
    __typename?: 'MarkdownRemarkFrontmatter';
    title?: Maybe<MarkdownRemarkFrontmatterTitle>;
    templateKey?: Maybe<Scalars['String']>;
    slug?: Maybe<MarkdownRemarkFrontmatterSlug>;
    image?: Maybe<File>;
    heading?: Maybe<Scalars['String']>;
    subheading?: Maybe<Scalars['String']>;
    mainpitch?: Maybe<MarkdownRemarkFrontmatterMainpitch>;
    description?: Maybe<Scalars['String']>;
    intro?: Maybe<MarkdownRemarkFrontmatterIntro>;
    main?: Maybe<MarkdownRemarkFrontmatterMain>;
    path?: Maybe<Scalars['String']>;
    testimonials?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterTestimonials>>>;
    full_image?: Maybe<File>;
    pricing?: Maybe<MarkdownRemarkFrontmatterPricing>;
    name?: Maybe<Scalars['String']>;
    date?: Maybe<Scalars['Date']>;
    featuredpost?: Maybe<Scalars['Boolean']>;
    featuredimage?: Maybe<File>;
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MarkdownRemarkFrontmatterDateArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
    title?: Maybe<MarkdownRemarkFrontmatterTitleFilterInput>;
    templateKey?: Maybe<StringQueryOperatorInput>;
    slug?: Maybe<MarkdownRemarkFrontmatterSlugFilterInput>;
    image?: Maybe<FileFilterInput>;
    heading?: Maybe<StringQueryOperatorInput>;
    subheading?: Maybe<StringQueryOperatorInput>;
    mainpitch?: Maybe<MarkdownRemarkFrontmatterMainpitchFilterInput>;
    description?: Maybe<StringQueryOperatorInput>;
    intro?: Maybe<MarkdownRemarkFrontmatterIntroFilterInput>;
    main?: Maybe<MarkdownRemarkFrontmatterMainFilterInput>;
    path?: Maybe<StringQueryOperatorInput>;
    testimonials?: Maybe<MarkdownRemarkFrontmatterTestimonialsFilterListInput>;
    full_image?: Maybe<FileFilterInput>;
    pricing?: Maybe<MarkdownRemarkFrontmatterPricingFilterInput>;
    name?: Maybe<StringQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    featuredpost?: Maybe<BooleanQueryOperatorInput>;
    featuredimage?: Maybe<FileFilterInput>;
    tags?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterIntro = {
    __typename?: 'MarkdownRemarkFrontmatterIntro';
    blurbs?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterIntroBlurbs>>>;
    heading?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterIntroBlurbs = {
    __typename?: 'MarkdownRemarkFrontmatterIntroBlurbs';
    image?: Maybe<File>;
    text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterIntroBlurbsFilterInput = {
    image?: Maybe<FileFilterInput>;
    text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterIntroBlurbsFilterListInput = {
    elemMatch?: Maybe<MarkdownRemarkFrontmatterIntroBlurbsFilterInput>;
};

export type MarkdownRemarkFrontmatterIntroFilterInput = {
    blurbs?: Maybe<MarkdownRemarkFrontmatterIntroBlurbsFilterListInput>;
    heading?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterMain = {
    __typename?: 'MarkdownRemarkFrontmatterMain';
    heading?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    image1?: Maybe<MarkdownRemarkFrontmatterMainImage1>;
    image2?: Maybe<MarkdownRemarkFrontmatterMainImage2>;
    image3?: Maybe<MarkdownRemarkFrontmatterMainImage3>;
};

export type MarkdownRemarkFrontmatterMainFilterInput = {
    heading?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    image1?: Maybe<MarkdownRemarkFrontmatterMainImage1FilterInput>;
    image2?: Maybe<MarkdownRemarkFrontmatterMainImage2FilterInput>;
    image3?: Maybe<MarkdownRemarkFrontmatterMainImage3FilterInput>;
};

export type MarkdownRemarkFrontmatterMainImage1 = {
    __typename?: 'MarkdownRemarkFrontmatterMainImage1';
    alt?: Maybe<Scalars['String']>;
    image?: Maybe<File>;
};

export type MarkdownRemarkFrontmatterMainImage1FilterInput = {
    alt?: Maybe<StringQueryOperatorInput>;
    image?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkFrontmatterMainImage2 = {
    __typename?: 'MarkdownRemarkFrontmatterMainImage2';
    alt?: Maybe<Scalars['String']>;
    image?: Maybe<File>;
};

export type MarkdownRemarkFrontmatterMainImage2FilterInput = {
    alt?: Maybe<StringQueryOperatorInput>;
    image?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkFrontmatterMainImage3 = {
    __typename?: 'MarkdownRemarkFrontmatterMainImage3';
    alt?: Maybe<Scalars['String']>;
    image?: Maybe<File>;
};

export type MarkdownRemarkFrontmatterMainImage3FilterInput = {
    alt?: Maybe<StringQueryOperatorInput>;
    image?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkFrontmatterMainpitch = {
    __typename?: 'MarkdownRemarkFrontmatterMainpitch';
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterMainpitchFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterPricing = {
    __typename?: 'MarkdownRemarkFrontmatterPricing';
    heading?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    plans?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterPricingPlans>>>;
};

export type MarkdownRemarkFrontmatterPricingFilterInput = {
    heading?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    plans?: Maybe<MarkdownRemarkFrontmatterPricingPlansFilterListInput>;
};

export type MarkdownRemarkFrontmatterPricingPlans = {
    __typename?: 'MarkdownRemarkFrontmatterPricingPlans';
    description?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<Scalars['String']>>>;
    plan?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterPricingPlansFilterInput = {
    description?: Maybe<StringQueryOperatorInput>;
    items?: Maybe<StringQueryOperatorInput>;
    plan?: Maybe<StringQueryOperatorInput>;
    price?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterPricingPlansFilterListInput = {
    elemMatch?: Maybe<MarkdownRemarkFrontmatterPricingPlansFilterInput>;
};

export type MarkdownRemarkFrontmatterSlug = {
    __typename?: 'MarkdownRemarkFrontmatterSlug';
    en?: Maybe<Scalars['String']>;
    tr?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSlugFilterInput = {
    en?: Maybe<StringQueryOperatorInput>;
    tr?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterTestimonials = {
    __typename?: 'MarkdownRemarkFrontmatterTestimonials';
    author?: Maybe<Scalars['String']>;
    quote?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterTestimonialsFilterInput = {
    author?: Maybe<StringQueryOperatorInput>;
    quote?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterTestimonialsFilterListInput = {
    elemMatch?: Maybe<MarkdownRemarkFrontmatterTestimonialsFilterInput>;
};

export type MarkdownRemarkFrontmatterTitle = {
    __typename?: 'MarkdownRemarkFrontmatterTitle';
    en?: Maybe<Scalars['String']>;
    tr?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterTitleFilterInput = {
    en?: Maybe<StringQueryOperatorInput>;
    tr?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
    __typename?: 'MarkdownRemarkGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<MarkdownRemarkEdge>;
    nodes: Array<MarkdownRemark>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
    fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
    __typename?: 'MarkdownWordCount';
    paragraphs?: Maybe<Scalars['Int']>;
    sentences?: Maybe<Scalars['Int']>;
    words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
    paragraphs?: Maybe<IntQueryOperatorInput>;
    sentences?: Maybe<IntQueryOperatorInput>;
    words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type NodeFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
    elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
    __typename?: 'PageInfo';
    currentPage: Scalars['Int'];
    hasPreviousPage: Scalars['Boolean'];
    hasNextPage: Scalars['Boolean'];
    itemCount: Scalars['Int'];
    pageCount: Scalars['Int'];
    perPage?: Maybe<Scalars['Int']>;
    totalCount: Scalars['Int'];
};

export type Potrace = {
    turnPolicy?: Maybe<PotraceTurnPolicy>;
    turdSize?: Maybe<Scalars['Float']>;
    alphaMax?: Maybe<Scalars['Float']>;
    optCurve?: Maybe<Scalars['Boolean']>;
    optTolerance?: Maybe<Scalars['Float']>;
    threshold?: Maybe<Scalars['Int']>;
    blackOnWhite?: Maybe<Scalars['Boolean']>;
    color?: Maybe<Scalars['String']>;
    background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
    TurnpolicyBlack = 'TURNPOLICY_BLACK',
    TurnpolicyWhite = 'TURNPOLICY_WHITE',
    TurnpolicyLeft = 'TURNPOLICY_LEFT',
    TurnpolicyRight = 'TURNPOLICY_RIGHT',
    TurnpolicyMinority = 'TURNPOLICY_MINORITY',
    TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type Query = {
    __typename?: 'Query';
    file?: Maybe<File>;
    allFile: FileConnection;
    directory?: Maybe<Directory>;
    allDirectory: DirectoryConnection;
    site?: Maybe<Site>;
    allSite: SiteConnection;
    sitePage?: Maybe<SitePage>;
    allSitePage: SitePageConnection;
    imageSharp?: Maybe<ImageSharp>;
    allImageSharp: ImageSharpConnection;
    markdownRemark?: Maybe<MarkdownRemark>;
    allMarkdownRemark: MarkdownRemarkConnection;
    siteBuildMetadata?: Maybe<SiteBuildMetadata>;
    allSiteBuildMetadata: SiteBuildMetadataConnection;
    sitePlugin?: Maybe<SitePlugin>;
    allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type QueryAllFileArgs = {
    filter?: Maybe<FileFilterInput>;
    sort?: Maybe<FileSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
    filter?: Maybe<DirectoryFilterInput>;
    sort?: Maybe<DirectorySortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
    buildTime?: Maybe<DateQueryOperatorInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    proxy?: Maybe<SiteProxyFilterListInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
    filter?: Maybe<SiteFilterInput>;
    sort?: Maybe<SiteSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
    filter?: Maybe<SitePageFilterInput>;
    sort?: Maybe<SitePageSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
    fixed?: Maybe<ImageSharpFixedFilterInput>;
    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
    fluid?: Maybe<ImageSharpFluidFilterInput>;
    sizes?: Maybe<ImageSharpSizesFilterInput>;
    original?: Maybe<ImageSharpOriginalFilterInput>;
    resize?: Maybe<ImageSharpResizeFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
    filter?: Maybe<ImageSharpFilterInput>;
    sort?: Maybe<ImageSharpSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryMarkdownRemarkArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<MarkdownWordCountFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMarkdownRemarkArgs = {
    filter?: Maybe<MarkdownRemarkFilterInput>;
    sort?: Maybe<MarkdownRemarkSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteBuildMetadataArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
    filter?: Maybe<SiteBuildMetadataFilterInput>;
    sort?: Maybe<SiteBuildMetadataSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
    filter?: Maybe<SitePluginFilterInput>;
    sort?: Maybe<SitePluginSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
    __typename?: 'Site';
    buildTime?: Maybe<Scalars['Date']>;
    siteMetadata?: Maybe<SiteSiteMetadata>;
    port?: Maybe<Scalars['Int']>;
    host?: Maybe<Scalars['String']>;
    proxy?: Maybe<Array<Maybe<SiteProxy>>>;
    polyfill?: Maybe<Scalars['Boolean']>;
    pathPrefix?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type SiteBuildTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
    __typename?: 'SiteBuildMetadata';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildMetadataBuildTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
    __typename?: 'SiteBuildMetadataConnection';
    totalCount: Scalars['Int'];
    edges: Array<SiteBuildMetadataEdge>;
    nodes: Array<SiteBuildMetadata>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
    __typename?: 'SiteBuildMetadataEdge';
    next?: Maybe<SiteBuildMetadata>;
    node: SiteBuildMetadata;
    previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    BuildTime = 'buildTime',
}

export type SiteBuildMetadataFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
    __typename?: 'SiteBuildMetadataGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<SiteBuildMetadataEdge>;
    nodes: Array<SiteBuildMetadata>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
    fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
    __typename?: 'SiteConnection';
    totalCount: Scalars['Int'];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
    field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SiteFieldsEnum;
};

export type SiteEdge = {
    __typename?: 'SiteEdge';
    next?: Maybe<Site>;
    node: Site;
    previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
    BuildTime = 'buildTime',
    SiteMetadataTitle = 'siteMetadata___title',
    SiteMetadataDescription = 'siteMetadata___description',
    SiteMetadataLocales = 'siteMetadata___locales',
    Port = 'port',
    Host = 'host',
    Proxy = 'proxy',
    ProxyPrefix = 'proxy___prefix',
    ProxyUrl = 'proxy___url',
    Polyfill = 'polyfill',
    PathPrefix = 'pathPrefix',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export type SiteFilterInput = {
    buildTime?: Maybe<DateQueryOperatorInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    proxy?: Maybe<SiteProxyFilterListInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
    __typename?: 'SiteGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
    __typename?: 'SitePage';
    path: Scalars['String'];
    component: Scalars['String'];
    internalComponentName: Scalars['String'];
    componentChunkName: Scalars['String'];
    matchPath?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
    pluginCreator?: Maybe<SitePlugin>;
    pluginCreatorId?: Maybe<Scalars['String']>;
    componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
    __typename?: 'SitePageConnection';
    totalCount: Scalars['Int'];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
    field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePageFieldsEnum;
};

export type SitePageEdge = {
    __typename?: 'SitePageEdge';
    next?: Maybe<SitePage>;
    node: SitePage;
    previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
    Path = 'path',
    Component = 'component',
    InternalComponentName = 'internalComponentName',
    ComponentChunkName = 'componentChunkName',
    MatchPath = 'matchPath',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
    PluginCreatorId = 'pluginCreator___id',
    PluginCreatorParentId = 'pluginCreator___parent___id',
    PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
    PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
    PluginCreatorParentChildren = 'pluginCreator___parent___children',
    PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
    PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
    PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
    PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
    PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
    PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
    PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
    PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
    PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
    PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
    PluginCreatorChildren = 'pluginCreator___children',
    PluginCreatorChildrenId = 'pluginCreator___children___id',
    PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
    PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
    PluginCreatorChildrenChildren = 'pluginCreator___children___children',
    PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
    PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
    PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
    PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
    PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
    PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
    PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
    PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
    PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
    PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
    PluginCreatorInternalContent = 'pluginCreator___internal___content',
    PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
    PluginCreatorInternalDescription = 'pluginCreator___internal___description',
    PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
    PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
    PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
    PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
    PluginCreatorInternalType = 'pluginCreator___internal___type',
    PluginCreatorResolve = 'pluginCreator___resolve',
    PluginCreatorName = 'pluginCreator___name',
    PluginCreatorVersion = 'pluginCreator___version',
    PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
    PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
    PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
    PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
    PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
    PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
    PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
    PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
    PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
    PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
    PluginCreatorPluginOptionsDestinationDir = 'pluginCreator___pluginOptions___destinationDir',
    PluginCreatorPluginOptionsModulePath = 'pluginCreator___pluginOptions___modulePath',
    PluginCreatorPluginOptionsDevelop = 'pluginCreator___pluginOptions___develop',
    PluginCreatorPluginOptionsPurgeOnly = 'pluginCreator___pluginOptions___purgeOnly',
    PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
    PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
    PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
    PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
    PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
    PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
    PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
    PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
    PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
    PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
    PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
    PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
    PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
    PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
    PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
    PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
    PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
    PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
    PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
    PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
    PluginCreatorId = 'pluginCreatorId',
    ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
    __typename?: 'SitePageGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
    fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
    __typename?: 'SitePlugin';
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    resolve?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    pluginOptions?: Maybe<SitePluginPluginOptions>;
    nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    pluginFilepath?: Maybe<Scalars['String']>;
    packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
    __typename?: 'SitePluginConnection';
    totalCount: Scalars['Int'];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
    field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
    __typename?: 'SitePluginEdge';
    next?: Maybe<SitePlugin>;
    node: SitePlugin;
    previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Resolve = 'resolve',
    Name = 'name',
    Version = 'version',
    PluginOptionsPlugins = 'pluginOptions___plugins',
    PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
    PluginOptionsPluginsId = 'pluginOptions___plugins___id',
    PluginOptionsPluginsName = 'pluginOptions___plugins___name',
    PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
    PluginOptionsPluginsPluginOptionsName = 'pluginOptions___plugins___pluginOptions___name',
    PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
    PluginOptionsPluginsPluginOptionsDestinationDir = 'pluginOptions___plugins___pluginOptions___destinationDir',
    PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
    PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
    PluginOptionsPath = 'pluginOptions___path',
    PluginOptionsName = 'pluginOptions___name',
    PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
    PluginOptionsDestinationDir = 'pluginOptions___destinationDir',
    PluginOptionsModulePath = 'pluginOptions___modulePath',
    PluginOptionsDevelop = 'pluginOptions___develop',
    PluginOptionsPurgeOnly = 'pluginOptions___purgeOnly',
    PluginOptionsPathCheck = 'pluginOptions___pathCheck',
    NodeApIs = 'nodeAPIs',
    BrowserApIs = 'browserAPIs',
    SsrApIs = 'ssrAPIs',
    PluginFilepath = 'pluginFilepath',
    PackageJsonName = 'packageJson___name',
    PackageJsonDescription = 'packageJson___description',
    PackageJsonVersion = 'packageJson___version',
    PackageJsonMain = 'packageJson___main',
    PackageJsonLicense = 'packageJson___license',
    PackageJsonDependencies = 'packageJson___dependencies',
    PackageJsonDependenciesName = 'packageJson___dependencies___name',
    PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
    PackageJsonDevDependencies = 'packageJson___devDependencies',
    PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
    PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
    PackageJsonPeerDependencies = 'packageJson___peerDependencies',
    PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
    PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
    PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
    __typename?: 'SitePluginGroupConnection';
    totalCount: Scalars['Int'];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
    __typename?: 'SitePluginPackageJson';
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    main?: Maybe<Scalars['String']>;
    license?: Maybe<Scalars['String']>;
    dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
    devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
    peerDependencies?: Maybe<
        Array<Maybe<SitePluginPackageJsonPeerDependencies>>
    >;
    keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
    __typename?: 'SitePluginPackageJsonDependencies';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
    __typename?: 'SitePluginPackageJsonDevDependencies';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    main?: Maybe<StringQueryOperatorInput>;
    license?: Maybe<StringQueryOperatorInput>;
    dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
    devDependencies?: Maybe<
        SitePluginPackageJsonDevDependenciesFilterListInput
    >;
    peerDependencies?: Maybe<
        SitePluginPackageJsonPeerDependenciesFilterListInput
    >;
    keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
    __typename?: 'SitePluginPackageJsonPeerDependencies';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
    __typename?: 'SitePluginPluginOptions';
    plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
    path?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    maxWidth?: Maybe<Scalars['Int']>;
    destinationDir?: Maybe<Scalars['String']>;
    modulePath?: Maybe<Scalars['String']>;
    develop?: Maybe<Scalars['Boolean']>;
    purgeOnly?: Maybe<Array<Maybe<Scalars['String']>>>;
    pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
    plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
    path?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    maxWidth?: Maybe<IntQueryOperatorInput>;
    destinationDir?: Maybe<StringQueryOperatorInput>;
    modulePath?: Maybe<StringQueryOperatorInput>;
    develop?: Maybe<BooleanQueryOperatorInput>;
    purgeOnly?: Maybe<StringQueryOperatorInput>;
    pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
    __typename?: 'SitePluginPluginOptionsPlugins';
    resolve?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
    browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
    resolve?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<
        SitePluginPluginOptionsPluginsPluginOptionsFilterInput
    >;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
    elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
    __typename?: 'SitePluginPluginOptionsPluginsPluginOptions';
    name?: Maybe<Scalars['String']>;
    maxWidth?: Maybe<Scalars['Int']>;
    destinationDir?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    maxWidth?: Maybe<IntQueryOperatorInput>;
    destinationDir?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
    fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteProxy = {
    __typename?: 'SiteProxy';
    prefix?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type SiteProxyFilterInput = {
    prefix?: Maybe<StringQueryOperatorInput>;
    url?: Maybe<StringQueryOperatorInput>;
};

export type SiteProxyFilterListInput = {
    elemMatch?: Maybe<SiteProxyFilterInput>;
};

export type SiteSiteMetadata = {
    __typename?: 'SiteSiteMetadata';
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    locales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteSiteMetadataFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    locales?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
    fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
    Asc = 'ASC',
    Desc = 'DESC',
}

export type StringQueryOperatorInput = {
    eq?: Maybe<Scalars['String']>;
    ne?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Maybe<Scalars['String']>>>;
    nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    regex?: Maybe<Scalars['String']>;
    glob?: Maybe<Scalars['String']>;
};

export type GatsbyImageSharpFixedFragment = {
    __typename?: 'ImageSharpFixed';
} & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = {
    __typename?: 'ImageSharpFixed';
} & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = {
    __typename?: 'ImageSharpFixed';
} & Pick<
    ImageSharpFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
    __typename?: 'ImageSharpFixed';
} & Pick<
    ImageSharpFixed,
    | 'tracedSVG'
    | 'width'
    | 'height'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = {
    __typename?: 'ImageSharpFixed';
} & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
    __typename?: 'ImageSharpFixed';
} & Pick<
    ImageSharpFixed,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFluidFragment = {
    __typename?: 'ImageSharpFluid';
} & Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
    __typename?: 'ImageSharpFluid';
} & {
    maxHeight: ImageSharpFluid['presentationHeight'];
    maxWidth: ImageSharpFluid['presentationWidth'];
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
    __typename?: 'ImageSharpFluid';
} & Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebpFragment = {
    __typename?: 'ImageSharpFluid';
} & Pick<
    ImageSharpFluid,
    | 'base64'
    | 'aspectRatio'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
    | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
    __typename?: 'ImageSharpFluid';
} & Pick<
    ImageSharpFluid,
    | 'tracedSVG'
    | 'aspectRatio'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
    | 'sizes'
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = {
    __typename?: 'ImageSharpFluid';
} & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
    __typename?: 'ImageSharpFluid';
} & Pick<
    ImageSharpFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpResolutionsFragment = {
    __typename?: 'ImageSharpResolutions';
} & Pick<
    ImageSharpResolutions,
    'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
    __typename?: 'ImageSharpResolutions';
} & Pick<
    ImageSharpResolutions,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebpFragment = {
    __typename?: 'ImageSharpResolutions';
} & Pick<
    ImageSharpResolutions,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
    __typename?: 'ImageSharpResolutions';
} & Pick<
    ImageSharpResolutions,
    | 'tracedSVG'
    | 'width'
    | 'height'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
    __typename?: 'ImageSharpResolutions';
} & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
    __typename?: 'ImageSharpResolutions';
} & Pick<
    ImageSharpResolutions,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpSizesFragment = {
    __typename?: 'ImageSharpSizes';
} & Pick<
    ImageSharpSizes,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = {
    __typename?: 'ImageSharpSizes';
} & Pick<
    ImageSharpSizes,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebpFragment = {
    __typename?: 'ImageSharpSizes';
} & Pick<
    ImageSharpSizes,
    | 'base64'
    | 'aspectRatio'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
    | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
    __typename?: 'ImageSharpSizes';
} & Pick<
    ImageSharpSizes,
    | 'tracedSVG'
    | 'aspectRatio'
    | 'src'
    | 'srcSet'
    | 'srcWebp'
    | 'srcSetWebp'
    | 'sizes'
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = {
    __typename?: 'ImageSharpSizes';
} & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
    __typename?: 'ImageSharpSizes';
} & Pick<
    ImageSharpSizes,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type AboutPageQueryVariables = Exact<{
    id: Scalars['String'];
}>;

export type AboutPageQuery = { __typename?: 'Query' } & {
    markdownRemark?: Maybe<
        { __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'html'> & {
                frontmatter?: Maybe<
                    { __typename?: 'MarkdownRemarkFrontmatter' } & {
                        title?: Maybe<
                            {
                                __typename?: 'MarkdownRemarkFrontmatterTitle';
                            } & Pick<MarkdownRemarkFrontmatterTitle, 'en'>
                        >;
                    }
                >;
            }
    >;
};

export type BlogIndexPageTemplateQueryVariables = Exact<{
    [key: string]: never;
}>;

export type BlogIndexPageTemplateQuery = { __typename?: 'Query' } & {
    markdownRemark?: Maybe<
        { __typename?: 'MarkdownRemark' } & {
            frontmatter?: Maybe<
                { __typename?: 'MarkdownRemarkFrontmatter' } & {
                    title?: Maybe<
                        {
                            __typename?: 'MarkdownRemarkFrontmatterTitle';
                        } & Pick<MarkdownRemarkFrontmatterTitle, 'en'>
                    >;
                }
            >;
        }
    >;
};

export type BlogPostByIdQueryVariables = Exact<{
    id: Scalars['String'];
}>;

export type BlogPostByIdQuery = { __typename?: 'Query' } & {
    markdownRemark?: Maybe<
        { __typename?: 'MarkdownRemark' } & Pick<
            MarkdownRemark,
            'id' | 'html'
        > & {
                frontmatter?: Maybe<
                    { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
                        MarkdownRemarkFrontmatter,
                        'date' | 'description'
                    > & {
                            title?: Maybe<
                                {
                                    __typename?: 'MarkdownRemarkFrontmatterTitle';
                                } & Pick<
                                    MarkdownRemarkFrontmatterTitle,
                                    'en' | 'tr'
                                >
                            >;
                        }
                >;
            }
    >;
};

export type IndexPageTemplateQueryVariables = Exact<{ [key: string]: never }>;

export type IndexPageTemplateQuery = { __typename?: 'Query' } & {
    markdownRemark?: Maybe<
        { __typename?: 'MarkdownRemark' } & {
            frontmatter?: Maybe<
                { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
                    MarkdownRemarkFrontmatter,
                    'heading' | 'subheading' | 'description'
                > & {
                        title?: Maybe<
                            {
                                __typename?: 'MarkdownRemarkFrontmatterTitle';
                            } & Pick<MarkdownRemarkFrontmatterTitle, 'en'>
                        >;
                        image?: Maybe<
                            { __typename?: 'File' } & {
                                childImageSharp?: Maybe<
                                    { __typename?: 'ImageSharp' } & {
                                        fluid?: Maybe<
                                            {
                                                __typename?: 'ImageSharpFluid';
                                            } & GatsbyImageSharpFluidFragment
                                        >;
                                    }
                                >;
                            }
                        >;
                        mainpitch?: Maybe<
                            {
                                __typename?: 'MarkdownRemarkFrontmatterMainpitch';
                            } & Pick<
                                MarkdownRemarkFrontmatterMainpitch,
                                'title' | 'description'
                            >
                        >;
                        intro?: Maybe<
                            {
                                __typename?: 'MarkdownRemarkFrontmatterIntro';
                            } & Pick<
                                MarkdownRemarkFrontmatterIntro,
                                'heading' | 'description'
                            > & {
                                    blurbs?: Maybe<
                                        Array<
                                            Maybe<
                                                {
                                                    __typename?: 'MarkdownRemarkFrontmatterIntroBlurbs';
                                                } & Pick<
                                                    MarkdownRemarkFrontmatterIntroBlurbs,
                                                    'text'
                                                > & {
                                                        image?: Maybe<
                                                            {
                                                                __typename?: 'File';
                                                            } & {
                                                                childImageSharp?: Maybe<
                                                                    {
                                                                        __typename?: 'ImageSharp';
                                                                    } & {
                                                                        fluid?: Maybe<
                                                                            {
                                                                                __typename?: 'ImageSharpFluid';
                                                                            } & GatsbyImageSharpFluidFragment
                                                                        >;
                                                                    }
                                                                >;
                                                            }
                                                        >;
                                                    }
                                            >
                                        >
                                    >;
                                }
                        >;
                    }
            >;
        }
    >;
};

export type ProductPageQueryVariables = Exact<{
    id: Scalars['String'];
}>;

export type ProductPageQuery = { __typename?: 'Query' } & {
    markdownRemark?: Maybe<
        { __typename?: 'MarkdownRemark' } & {
            frontmatter?: Maybe<
                { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
                    MarkdownRemarkFrontmatter,
                    'heading' | 'description'
                > & {
                        title?: Maybe<
                            {
                                __typename?: 'MarkdownRemarkFrontmatterTitle';
                            } & Pick<MarkdownRemarkFrontmatterTitle, 'en'>
                        >;
                        image?: Maybe<
                            { __typename?: 'File' } & {
                                childImageSharp?: Maybe<
                                    { __typename?: 'ImageSharp' } & {
                                        fluid?: Maybe<
                                            {
                                                __typename?: 'ImageSharpFluid';
                                            } & GatsbyImageSharpFluidFragment
                                        >;
                                    }
                                >;
                            }
                        >;
                        intro?: Maybe<
                            {
                                __typename?: 'MarkdownRemarkFrontmatterIntro';
                            } & Pick<
                                MarkdownRemarkFrontmatterIntro,
                                'heading' | 'description'
                            > & {
                                    blurbs?: Maybe<
                                        Array<
                                            Maybe<
                                                {
                                                    __typename?: 'MarkdownRemarkFrontmatterIntroBlurbs';
                                                } & Pick<
                                                    MarkdownRemarkFrontmatterIntroBlurbs,
                                                    'text'
                                                > & {
                                                        image?: Maybe<
                                                            {
                                                                __typename?: 'File';
                                                            } & {
                                                                childImageSharp?: Maybe<
                                                                    {
                                                                        __typename?: 'ImageSharp';
                                                                    } & {
                                                                        fluid?: Maybe<
                                                                            {
                                                                                __typename?: 'ImageSharpFluid';
                                                                            } & GatsbyImageSharpFluidFragment
                                                                        >;
                                                                    }
                                                                >;
                                                            }
                                                        >;
                                                    }
                                            >
                                        >
                                    >;
                                }
                        >;
                        main?: Maybe<
                            {
                                __typename?: 'MarkdownRemarkFrontmatterMain';
                            } & Pick<
                                MarkdownRemarkFrontmatterMain,
                                'heading' | 'description'
                            > & {
                                    image1?: Maybe<
                                        {
                                            __typename?: 'MarkdownRemarkFrontmatterMainImage1';
                                        } & Pick<
                                            MarkdownRemarkFrontmatterMainImage1,
                                            'alt'
                                        > & {
                                                image?: Maybe<
                                                    { __typename?: 'File' } & {
                                                        childImageSharp?: Maybe<
                                                            {
                                                                __typename?: 'ImageSharp';
                                                            } & {
                                                                fluid?: Maybe<
                                                                    {
                                                                        __typename?: 'ImageSharpFluid';
                                                                    } & GatsbyImageSharpFluidFragment
                                                                >;
                                                            }
                                                        >;
                                                    }
                                                >;
                                            }
                                    >;
                                    image2?: Maybe<
                                        {
                                            __typename?: 'MarkdownRemarkFrontmatterMainImage2';
                                        } & Pick<
                                            MarkdownRemarkFrontmatterMainImage2,
                                            'alt'
                                        > & {
                                                image?: Maybe<
                                                    { __typename?: 'File' } & {
                                                        childImageSharp?: Maybe<
                                                            {
                                                                __typename?: 'ImageSharp';
                                                            } & {
                                                                fluid?: Maybe<
                                                                    {
                                                                        __typename?: 'ImageSharpFluid';
                                                                    } & GatsbyImageSharpFluidFragment
                                                                >;
                                                            }
                                                        >;
                                                    }
                                                >;
                                            }
                                    >;
                                    image3?: Maybe<
                                        {
                                            __typename?: 'MarkdownRemarkFrontmatterMainImage3';
                                        } & Pick<
                                            MarkdownRemarkFrontmatterMainImage3,
                                            'alt'
                                        > & {
                                                image?: Maybe<
                                                    { __typename?: 'File' } & {
                                                        childImageSharp?: Maybe<
                                                            {
                                                                __typename?: 'ImageSharp';
                                                            } & {
                                                                fluid?: Maybe<
                                                                    {
                                                                        __typename?: 'ImageSharpFluid';
                                                                    } & GatsbyImageSharpFluidFragment
                                                                >;
                                                            }
                                                        >;
                                                    }
                                                >;
                                            }
                                    >;
                                }
                        >;
                        testimonials?: Maybe<
                            Array<
                                Maybe<
                                    {
                                        __typename?: 'MarkdownRemarkFrontmatterTestimonials';
                                    } & Pick<
                                        MarkdownRemarkFrontmatterTestimonials,
                                        'author' | 'quote'
                                    >
                                >
                            >
                        >;
                        full_image?: Maybe<
                            { __typename?: 'File' } & {
                                childImageSharp?: Maybe<
                                    { __typename?: 'ImageSharp' } & {
                                        fluid?: Maybe<
                                            {
                                                __typename?: 'ImageSharpFluid';
                                            } & GatsbyImageSharpFluidFragment
                                        >;
                                    }
                                >;
                            }
                        >;
                        pricing?: Maybe<
                            {
                                __typename?: 'MarkdownRemarkFrontmatterPricing';
                            } & Pick<
                                MarkdownRemarkFrontmatterPricing,
                                'heading' | 'description'
                            > & {
                                    plans?: Maybe<
                                        Array<
                                            Maybe<
                                                {
                                                    __typename?: 'MarkdownRemarkFrontmatterPricingPlans';
                                                } & Pick<
                                                    MarkdownRemarkFrontmatterPricingPlans,
                                                    | 'description'
                                                    | 'items'
                                                    | 'plan'
                                                    | 'price'
                                                >
                                            >
                                        >
                                    >;
                                }
                        >;
                    }
            >;
        }
    >;
};

export const GatsbyImageSharpFixedFragmentDoc = gql`
    fragment GatsbyImageSharpFixed on ImageSharpFixed {
        base64
        width
        height
        src
        srcSet
    }
`;
export const GatsbyImageSharpFixed_TracedSvgFragmentDoc = gql`
    fragment GatsbyImageSharpFixed_tracedSVG on ImageSharpFixed {
        tracedSVG
        width
        height
        src
        srcSet
    }
`;
export const GatsbyImageSharpFixed_WithWebpFragmentDoc = gql`
    fragment GatsbyImageSharpFixed_withWebp on ImageSharpFixed {
        base64
        width
        height
        src
        srcSet
        srcWebp
        srcSetWebp
    }
`;
export const GatsbyImageSharpFixed_WithWebp_TracedSvgFragmentDoc = gql`
    fragment GatsbyImageSharpFixed_withWebp_tracedSVG on ImageSharpFixed {
        tracedSVG
        width
        height
        src
        srcSet
        srcWebp
        srcSetWebp
    }
`;
export const GatsbyImageSharpFixed_NoBase64FragmentDoc = gql`
    fragment GatsbyImageSharpFixed_noBase64 on ImageSharpFixed {
        width
        height
        src
        srcSet
    }
`;
export const GatsbyImageSharpFixed_WithWebp_NoBase64FragmentDoc = gql`
    fragment GatsbyImageSharpFixed_withWebp_noBase64 on ImageSharpFixed {
        width
        height
        src
        srcSet
        srcWebp
        srcSetWebp
    }
`;
export const GatsbyImageSharpFluidFragmentDoc = gql`
    fragment GatsbyImageSharpFluid on ImageSharpFluid {
        base64
        aspectRatio
        src
        srcSet
        sizes
    }
`;
export const GatsbyImageSharpFluidLimitPresentationSizeFragmentDoc = gql`
    fragment GatsbyImageSharpFluidLimitPresentationSize on ImageSharpFluid {
        maxHeight: presentationHeight
        maxWidth: presentationWidth
    }
`;
export const GatsbyImageSharpFluid_TracedSvgFragmentDoc = gql`
    fragment GatsbyImageSharpFluid_tracedSVG on ImageSharpFluid {
        tracedSVG
        aspectRatio
        src
        srcSet
        sizes
    }
`;
export const GatsbyImageSharpFluid_WithWebpFragmentDoc = gql`
    fragment GatsbyImageSharpFluid_withWebp on ImageSharpFluid {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
    }
`;
export const GatsbyImageSharpFluid_WithWebp_TracedSvgFragmentDoc = gql`
    fragment GatsbyImageSharpFluid_withWebp_tracedSVG on ImageSharpFluid {
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
    }
`;
export const GatsbyImageSharpFluid_NoBase64FragmentDoc = gql`
    fragment GatsbyImageSharpFluid_noBase64 on ImageSharpFluid {
        aspectRatio
        src
        srcSet
        sizes
    }
`;
export const GatsbyImageSharpFluid_WithWebp_NoBase64FragmentDoc = gql`
    fragment GatsbyImageSharpFluid_withWebp_noBase64 on ImageSharpFluid {
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
    }
`;
export const GatsbyImageSharpResolutionsFragmentDoc = gql`
    fragment GatsbyImageSharpResolutions on ImageSharpResolutions {
        base64
        width
        height
        src
        srcSet
    }
`;
export const GatsbyImageSharpResolutions_TracedSvgFragmentDoc = gql`
    fragment GatsbyImageSharpResolutions_tracedSVG on ImageSharpResolutions {
        tracedSVG
        width
        height
        src
        srcSet
    }
`;
export const GatsbyImageSharpResolutions_WithWebpFragmentDoc = gql`
    fragment GatsbyImageSharpResolutions_withWebp on ImageSharpResolutions {
        base64
        width
        height
        src
        srcSet
        srcWebp
        srcSetWebp
    }
`;
export const GatsbyImageSharpResolutions_WithWebp_TracedSvgFragmentDoc = gql`
    fragment GatsbyImageSharpResolutions_withWebp_tracedSVG on ImageSharpResolutions {
        tracedSVG
        width
        height
        src
        srcSet
        srcWebp
        srcSetWebp
    }
`;
export const GatsbyImageSharpResolutions_NoBase64FragmentDoc = gql`
    fragment GatsbyImageSharpResolutions_noBase64 on ImageSharpResolutions {
        width
        height
        src
        srcSet
    }
`;
export const GatsbyImageSharpResolutions_WithWebp_NoBase64FragmentDoc = gql`
    fragment GatsbyImageSharpResolutions_withWebp_noBase64 on ImageSharpResolutions {
        width
        height
        src
        srcSet
        srcWebp
        srcSetWebp
    }
`;
export const GatsbyImageSharpSizesFragmentDoc = gql`
    fragment GatsbyImageSharpSizes on ImageSharpSizes {
        base64
        aspectRatio
        src
        srcSet
        sizes
    }
`;
export const GatsbyImageSharpSizes_TracedSvgFragmentDoc = gql`
    fragment GatsbyImageSharpSizes_tracedSVG on ImageSharpSizes {
        tracedSVG
        aspectRatio
        src
        srcSet
        sizes
    }
`;
export const GatsbyImageSharpSizes_WithWebpFragmentDoc = gql`
    fragment GatsbyImageSharpSizes_withWebp on ImageSharpSizes {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
    }
`;
export const GatsbyImageSharpSizes_WithWebp_TracedSvgFragmentDoc = gql`
    fragment GatsbyImageSharpSizes_withWebp_tracedSVG on ImageSharpSizes {
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
    }
`;
export const GatsbyImageSharpSizes_NoBase64FragmentDoc = gql`
    fragment GatsbyImageSharpSizes_noBase64 on ImageSharpSizes {
        aspectRatio
        src
        srcSet
        sizes
    }
`;
export const GatsbyImageSharpSizes_WithWebp_NoBase64FragmentDoc = gql`
    fragment GatsbyImageSharpSizes_withWebp_noBase64 on ImageSharpSizes {
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
    }
`;
export const AboutPageDocument = gql`
    query AboutPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title {
                    en
                }
            }
        }
    }
`;

/**
 * __useAboutPageQuery__
 *
 * To run a query within a React component, call `useAboutPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAboutPageQuery(
    baseOptions?: Apollo.QueryHookOptions<
        AboutPageQuery,
        AboutPageQueryVariables
    >
) {
    return Apollo.useQuery<AboutPageQuery, AboutPageQueryVariables>(
        AboutPageDocument,
        baseOptions
    );
}
export function useAboutPageLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        AboutPageQuery,
        AboutPageQueryVariables
    >
) {
    return Apollo.useLazyQuery<AboutPageQuery, AboutPageQueryVariables>(
        AboutPageDocument,
        baseOptions
    );
}
export type AboutPageQueryHookResult = ReturnType<typeof useAboutPageQuery>;
export type AboutPageLazyQueryHookResult = ReturnType<
    typeof useAboutPageLazyQuery
>;
export type AboutPageQueryResult = Apollo.QueryResult<
    AboutPageQuery,
    AboutPageQueryVariables
>;
export const BlogIndexPageTemplateDocument = gql`
    query BlogIndexPageTemplate {
        markdownRemark(
            frontmatter: { templateKey: { eq: "blog-index-page" } }
        ) {
            frontmatter {
                title {
                    en
                }
            }
        }
    }
`;

/**
 * __useBlogIndexPageTemplateQuery__
 *
 * To run a query within a React component, call `useBlogIndexPageTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogIndexPageTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogIndexPageTemplateQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogIndexPageTemplateQuery(
    baseOptions?: Apollo.QueryHookOptions<
        BlogIndexPageTemplateQuery,
        BlogIndexPageTemplateQueryVariables
    >
) {
    return Apollo.useQuery<
        BlogIndexPageTemplateQuery,
        BlogIndexPageTemplateQueryVariables
    >(BlogIndexPageTemplateDocument, baseOptions);
}
export function useBlogIndexPageTemplateLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        BlogIndexPageTemplateQuery,
        BlogIndexPageTemplateQueryVariables
    >
) {
    return Apollo.useLazyQuery<
        BlogIndexPageTemplateQuery,
        BlogIndexPageTemplateQueryVariables
    >(BlogIndexPageTemplateDocument, baseOptions);
}
export type BlogIndexPageTemplateQueryHookResult = ReturnType<
    typeof useBlogIndexPageTemplateQuery
>;
export type BlogIndexPageTemplateLazyQueryHookResult = ReturnType<
    typeof useBlogIndexPageTemplateLazyQuery
>;
export type BlogIndexPageTemplateQueryResult = Apollo.QueryResult<
    BlogIndexPageTemplateQuery,
    BlogIndexPageTemplateQueryVariables
>;
export const BlogPostByIdDocument = gql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title {
                    en
                    tr
                }
                description
            }
        }
    }
`;

/**
 * __useBlogPostByIdQuery__
 *
 * To run a query within a React component, call `useBlogPostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBlogPostByIdQuery(
    baseOptions?: Apollo.QueryHookOptions<
        BlogPostByIdQuery,
        BlogPostByIdQueryVariables
    >
) {
    return Apollo.useQuery<BlogPostByIdQuery, BlogPostByIdQueryVariables>(
        BlogPostByIdDocument,
        baseOptions
    );
}
export function useBlogPostByIdLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        BlogPostByIdQuery,
        BlogPostByIdQueryVariables
    >
) {
    return Apollo.useLazyQuery<BlogPostByIdQuery, BlogPostByIdQueryVariables>(
        BlogPostByIdDocument,
        baseOptions
    );
}
export type BlogPostByIdQueryHookResult = ReturnType<
    typeof useBlogPostByIdQuery
>;
export type BlogPostByIdLazyQueryHookResult = ReturnType<
    typeof useBlogPostByIdLazyQuery
>;
export type BlogPostByIdQueryResult = Apollo.QueryResult<
    BlogPostByIdQuery,
    BlogPostByIdQueryVariables
>;
export const IndexPageTemplateDocument = gql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title {
                    en
                }
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                subheading
                mainpitch {
                    title
                    description
                }
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 240, quality: 64) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        text
                    }
                    heading
                    description
                }
            }
        }
    }
    ${GatsbyImageSharpFluidFragmentDoc}
`;

/**
 * __useIndexPageTemplateQuery__
 *
 * To run a query within a React component, call `useIndexPageTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexPageTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexPageTemplateQuery({
 *   variables: {
 *   },
 * });
 */
export function useIndexPageTemplateQuery(
    baseOptions?: Apollo.QueryHookOptions<
        IndexPageTemplateQuery,
        IndexPageTemplateQueryVariables
    >
) {
    return Apollo.useQuery<
        IndexPageTemplateQuery,
        IndexPageTemplateQueryVariables
    >(IndexPageTemplateDocument, baseOptions);
}
export function useIndexPageTemplateLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        IndexPageTemplateQuery,
        IndexPageTemplateQueryVariables
    >
) {
    return Apollo.useLazyQuery<
        IndexPageTemplateQuery,
        IndexPageTemplateQueryVariables
    >(IndexPageTemplateDocument, baseOptions);
}
export type IndexPageTemplateQueryHookResult = ReturnType<
    typeof useIndexPageTemplateQuery
>;
export type IndexPageTemplateLazyQueryHookResult = ReturnType<
    typeof useIndexPageTemplateLazyQuery
>;
export type IndexPageTemplateQueryResult = Apollo.QueryResult<
    IndexPageTemplateQuery,
    IndexPageTemplateQueryVariables
>;
export const ProductPageDocument = gql`
    query ProductPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title {
                    en
                }
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                description
                intro {
                    blurbs {
                        image {
                            childImageSharp {
                                fluid(maxWidth: 240, quality: 64) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        text
                    }
                    heading
                    description
                }
                main {
                    heading
                    description
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 526, quality: 92) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    image2 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 526, quality: 92) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    image3 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1075, quality: 72) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                testimonials {
                    author
                    quote
                }
                full_image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                pricing {
                    heading
                    description
                    plans {
                        description
                        items
                        plan
                        price
                    }
                }
            }
        }
    }
    ${GatsbyImageSharpFluidFragmentDoc}
`;

/**
 * __useProductPageQuery__
 *
 * To run a query within a React component, call `useProductPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductPageQuery(
    baseOptions?: Apollo.QueryHookOptions<
        ProductPageQuery,
        ProductPageQueryVariables
    >
) {
    return Apollo.useQuery<ProductPageQuery, ProductPageQueryVariables>(
        ProductPageDocument,
        baseOptions
    );
}
export function useProductPageLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        ProductPageQuery,
        ProductPageQueryVariables
    >
) {
    return Apollo.useLazyQuery<ProductPageQuery, ProductPageQueryVariables>(
        ProductPageDocument,
        baseOptions
    );
}
export type ProductPageQueryHookResult = ReturnType<typeof useProductPageQuery>;
export type ProductPageLazyQueryHookResult = ReturnType<
    typeof useProductPageLazyQuery
>;
export type ProductPageQueryResult = Apollo.QueryResult<
    ProductPageQuery,
    ProductPageQueryVariables
>;
