/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum GetV1ReviewsGetParameterType {
  Video = 'video',
  Text = 'text',
}

export interface PostV1AuthLoginSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Login Successful","data":{"accessToken":"access token","refreshToken":"refresh token","user":{"_id":"6852f441d5f5b868bf582f1d","email":"example@xyz.abc","role":"user"}}} */
  data: {
    message: string;
    data: {
      accessToken: string;
      refreshToken: string;
      user: {
        /** @format any */
        _id: any;
        email: string;
        role?: 'admin' | 'user';
      };
    };
  };
}

export interface PostV1AuthLoginErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1AuthLoginRequestBody = ((object & object) & object) & {
  /** Email Of the User */
  email: string;
  /** Password Of the User */
  password?: string;
};

export interface PostV1AuthRegisterSuccessfulResponse {
  status: 'success';
  /** @example {"message":"User Created Successfully, Please verify your email"} */
  data: {
    message: string;
  };
}

export interface PostV1AuthRegisterErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1AuthRegisterRequestBody = ((object & object) & object) & {
  /**
   * Email Of the User
   * @format email
   */
  email: string;
  /** Password Of the User */
  password: string;
  fullName?: string;
};

export interface PutV1AuthPasswordChangeSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Password Changed Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1AuthPasswordChangeErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1AuthPasswordChangeRequestBody = ((object & object) & object) & {
  /**
   * Password Of the User
   * @minLength 8
   * @maxLength 16
   * @pattern /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
   */
  password: string;
  confirmPassword: string;
};

export interface PostV1FileUploadSuccessfulResponse {
  status: 'success';
  /** @example {"message":"File Added Successfully","data":[{"url":"https://ppfitness.s3.amazonaws.com/Screenshot%202024-01-13%20185527.png"}]} */
  data: {
    message: string;
    data: {
      url?: string;
    }[];
  };
}

export interface PostV1FileUploadErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1FileUploadRequestBody = ((object & object) & object) & {
  files: File | File[];
};

export interface PostV1FileDeleteSuccessfulResponse {
  status: 'success';
  /** @example {"message":"File Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1FileDeleteErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1FileDeleteRequestBody = ((object & object) & object) & {
  /** File Urls */
  files: string[];
};

export interface GetV1CategoriesGetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Categories Fetched Successfully","data":[{"_id":"6852f445d5f5b868bf582f25","name":"Category Name","totalFiles":0,"createdAt":"2025-06-18T17:15:49.359Z","updatedAt":"2025-06-18T17:15:49.359Z"}]} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id?: any;
      name: string;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalFiles: number;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt?: string;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      position?: number;
    }[];
  };
}

export interface GetV1CategoriesGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type GetV1CategoriesGetIdParameterId = string;

export interface GetV1CategoriesGetIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Categories Fetched Successfully","data":{"_id":"6852f445d5f5b868bf582f27","name":"Category Name","totalFiles":0,"createdAt":"2025-06-18T17:15:49.364Z","updatedAt":"2025-06-18T17:15:49.364Z"}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id?: any;
      name: string;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalFiles: number;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt?: string;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      position?: number;
    };
  };
}

export interface GetV1CategoriesGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1CategoriesIdParameterId = string;

export interface PutV1CategoriesIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Category Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1CategoriesIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1CategoriesIdRequestBody = ((object & object) & object) & {
  name: string;
};

export type DeleteV1CategoriesDeleteIdParameterId = string;

export interface DeleteV1CategoriesDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Category Deleted Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1CategoriesDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1CategoriesAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Category Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1CategoriesAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1CategoriesAddRequestBody = ((object & object) & object) & {
  name: string;
};

export interface PostV1CategoriesUpdateSequenceSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Sequence Updated Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1CategoriesUpdateSequenceErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1CategoriesUpdateSequenceRequestBody = ((object & object) & object) & {
  categories: {
    id: string;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    position: number;
  }[];
};

export interface GetV1SubcategoriesGetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Sub Categories Fetched Successfully","data":[{"_id":"6852f445d5f5b868bf582f24","name":"Sub Category Name","createdAt":"2025-06-18T17:15:49.253Z","updatedAt":"2025-06-18T17:15:49.253Z"}]} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id?: any;
      name: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt?: string;
    }[];
  };
}

export interface GetV1SubcategoriesGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1SubcategoriesIdParameterId = string;

export interface PutV1SubcategoriesIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"SubCategories Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1SubcategoriesIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1SubcategoriesIdRequestBody = ((object & object) & object) & {
  name: string;
};

export type DeleteV1SubcategoriesDeleteIdParameterId = string;

export interface DeleteV1SubcategoriesDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Sub Category Deleted Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1SubcategoriesDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1SubcategoriesAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Sub Category Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1SubcategoriesAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1SubcategoriesAddRequestBody = ((object & object) & object) & {
  name: string;
};

/**
 * Page Number
 * @minLength 1
 */
export type GetV1ProjectsGetParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1ProjectsGetParameterLimit = string;

export type GetV1ProjectsGetParameterSearch = string;

export type GetV1ProjectsGetParameterCategory = string;

export type GetV1ProjectsGetParameterSubCategory = string;

export type GetV1ProjectsGetParameterTags = string;

export interface GetV1ProjectsGetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Project Fetched Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"data":[{"_id":"6852f445d5f5b868bf582f1e","title":"Sub Category Title","category":{"_id":"6852f445d5f5b868bf582f1f","name":"Sub Category Name","totalFiles":1,"createdAt":"2025-06-18T17:15:49.183Z","updatedAt":"2025-06-18T17:15:49.183Z"},"subCategory":{"_id":"6852f445d5f5b868bf582f20","name":"Sub Category Name","createdAt":"2025-06-18T17:15:49.183Z","updatedAt":"2025-06-18T17:15:49.183Z"},"image":"Image URL","link":"Project Link","tags":"Project Tags","createdAt":"2025-06-18T17:15:49.183Z","updatedAt":"2025-06-18T17:15:49.183Z","figmaName":"Figma Name","hasReviewed":"yes","figmaLink":"Figma Link"}]} */
  data: {
    message: string;
    meta: {
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      total: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      page: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      limit: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalPages: number;
    };
    data: {
      /** @format any */
      _id?: any;
      title?: string;
      category: {
        /** @format any */
        _id?: any;
        name: string;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        totalFiles: number;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        createdAt?: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        updatedAt?: string;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        position?: number;
      };
      subCategory: {
        /** @format any */
        _id?: any;
        name: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        createdAt?: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        updatedAt?: string;
      };
      image?: string;
      link?: string;
      tags?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt?: string;
      figmaName?: string;
      hasReviewed?: 'yes' | 'no';
      figmaLink?: string;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      position?: number;
    }[];
  };
}

export interface GetV1ProjectsGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type GetV1ProjectsGetIdParameterId = string;

export interface GetV1ProjectsGetIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Project Fetched Successfully","data":{"_id":"6852f445d5f5b868bf582f21","title":"Sub Category Title","category":{"_id":"6852f445d5f5b868bf582f22","name":"Sub Category Name","totalFiles":1,"createdAt":"2025-06-18T17:15:49.195Z","updatedAt":"2025-06-18T17:15:49.195Z"},"subCategory":{"_id":"6852f445d5f5b868bf582f23","name":"Sub Category Name","createdAt":"2025-06-18T17:15:49.195Z","updatedAt":"2025-06-18T17:15:49.195Z"},"image":"Image URL","link":"Project Link","tags":"Tag 2","createdAt":"2025-06-18T17:15:49.195Z","updatedAt":"2025-06-18T17:15:49.195Z","figmaName":"Figma Name","hasReviewed":"yes","figmaLink":"Figma Link"}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id?: any;
      title?: string;
      category: {
        /** @format any */
        _id?: any;
        name: string;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        totalFiles: number;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        createdAt?: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        updatedAt?: string;
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        position?: number;
      };
      subCategory: {
        /** @format any */
        _id?: any;
        name: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        createdAt?: string;
        /**
         * YYYY-MM-DDTHH:mm:ss.sssZ
         * @format date-time
         */
        updatedAt?: string;
      };
      image?: string;
      link?: string;
      tags?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt?: string;
      figmaName?: string;
      hasReviewed?: 'yes' | 'no';
      figmaLink?: string;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      position?: number;
    };
  };
}

export interface GetV1ProjectsGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1ProjectsIdParameterId = string;

export interface PutV1ProjectsIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Sub Category Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1ProjectsIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1ProjectsIdRequestBody = ((object & object) & object) & {
  title?: string;
  category: string;
  subCategory: string;
  image?: string;
  link?: string;
  tags?: string;
  figmaName?: string;
  hasReviewed?: 'yes' | 'no';
  figmaLink?: string;
  /**
   * @format double
   * @min 5e-324
   * @exclusiveMin false
   * @max 1.7976931348623157e+308
   * @exclusiveMax false
   */
  position?: number;
};

export type DeleteV1ProjectsDeleteIdParameterId = string;

export interface DeleteV1ProjectsDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Projects Deleted Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1ProjectsDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1ProjectsAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Sub Category Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1ProjectsAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1ProjectsAddRequestBody = ((object & object) & object) & {
  title?: string;
  category: string;
  subCategory: string;
  image?: string;
  link?: string;
  tags?: string;
  figmaName?: string;
  hasReviewed?: 'yes' | 'no';
  figmaLink?: string;
};

export interface GetV1ProjectsTagsSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Project Fetched Successfully","data":["Tag 1","Tag 2"]} */
  data: {
    message: string;
    data: string[];
  };
}

export interface GetV1ProjectsTagsErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface GetV1ProjectsTotalSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Project Fetched Successfully","data":1} */
  data: {
    message: string;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    data: number;
  };
}

export interface GetV1ProjectsTotalErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PutV1ProjectsUpdateSequenceSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Sub Category Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1ProjectsUpdateSequenceErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1ProjectsUpdateSequenceRequestBody = ((object & object) & object) & {
  projects: {
    id: string;
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    newPosition: number;
  }[];
};

export type GetV1ReviewsGetParameterClientName = string;

export interface GetV1ReviewsGetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Sub Categories Fetched Successfully","data":[{"_id":"6852f445d5f5b868bf582f28","clientName":"Client Name","videoUrl":"Video URL","clientPhoto":"Client Photo","clientCountry":"Client Country","clientReview":"Client Review","figmaUrl":"Figma URL","type":"video","thumbnail":"Thumbnail","createdAt":"2025-06-18T17:15:49.469Z","updatedAt":"2025-06-18T17:15:49.469Z"}]} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id?: any;
      clientName: string;
      videoUrl?: string;
      clientPhoto?: string;
      clientCountry?: string;
      clientReview?: string;
      figmaUrl?: string;
      type: 'video' | 'text';
      thumbnail?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt?: string;
    }[];
  };
}

export interface GetV1ReviewsGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type GetV1ReviewsGetIdParameterId = string;

export interface GetV1ReviewsGetIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Sub Categories Fetched Successfully","data":{"_id":"6852f445d5f5b868bf582f29","clientName":"Client Name","videoUrl":"Video URL","clientPhoto":"Client Photo","clientCountry":"Client Country","clientReview":"Client Review","figmaUrl":"Figma URL","type":"video","thumbnail":"Thumbnail","createdAt":"2025-06-18T17:15:49.478Z","updatedAt":"2025-06-18T17:15:49.478Z"}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id?: any;
      clientName: string;
      videoUrl?: string;
      clientPhoto?: string;
      clientCountry?: string;
      clientReview?: string;
      figmaUrl?: string;
      type: 'video' | 'text';
      thumbnail?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt?: string;
    };
  };
}

export interface GetV1ReviewsGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1ReviewsIdParameterId = string;

export interface PutV1ReviewsIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Review Updated Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1ReviewsIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1ReviewsIdRequestBody = ((object & object) & object) & {
  clientName: string;
  videoUrl?: string;
  clientPhoto?: string;
  clientCountry?: string;
  clientReview?: string;
  figmaUrl?: string;
  thumbnail?: string;
};

export type DeleteV1ReviewsDeleteIdParameterId = string;

export interface DeleteV1ReviewsDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Review Deleted Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1ReviewsDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1ReviewsAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Review Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1ReviewsAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1ReviewsAddRequestBody = ((object & object) & object) & {
  clientName: string;
  videoUrl?: string;
  clientPhoto?: string;
  clientCountry?: string;
  clientReview?: string;
  figmaUrl?: string;
  type: 'video' | 'text';
  thumbnail?: string;
};

export interface GetV1ReviewsSummarySuccessfulResponse {
  status: 'success';
  /** @example {"message":"Sub Categories Fetched Successfully","data":{"totalVideoReviews":10,"totalTextReviews":10,"totalReviews":20}} */
  data: {
    message: string;
    data: {
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalVideoReviews: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalTextReviews: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalReviews: number;
    };
  };
}

export interface GetV1ReviewsSummaryErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://localhost:8000';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Taqwah Gallery API Documentation
 * @version 1.1.1
 * @baseUrl http://localhost:8000
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * No description
     *
     * @tags Authentication
     * @name PostV1AuthLogin
     * @summary Login endpoint
     * @request POST:/v1/auth/login
     */
    postV1AuthLogin: (data: PostV1AuthLoginRequestBody, params: RequestParams = {}) =>
      this.request<PostV1AuthLoginSuccessfulResponse, PostV1AuthLoginErrorResponse>({
        path: `/v1/auth/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name PostV1AuthRegister
     * @summary Registration endpoint
     * @request POST:/v1/auth/register
     */
    postV1AuthRegister: (data: PostV1AuthRegisterRequestBody, params: RequestParams = {}) =>
      this.request<PostV1AuthRegisterSuccessfulResponse, PostV1AuthRegisterErrorResponse>({
        path: `/v1/auth/register`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name PutV1AuthPasswordChange
     * @summary Change Password endpoint
     * @request PUT:/v1/auth/password/change
     * @secure
     */
    putV1AuthPasswordChange: (
      data: PutV1AuthPasswordChangeRequestBody,
      params: RequestParams = {}
    ) =>
      this.request<PutV1AuthPasswordChangeSuccessfulResponse, PutV1AuthPasswordChangeErrorResponse>(
        {
          path: `/v1/auth/password/change`,
          method: 'PUT',
          body: data,
          secure: true,
          type: ContentType.Json,
          format: 'json',
          ...params,
        }
      ),

    /**
     * No description
     *
     * @tags File
     * @name PostV1FileUpload
     * @summary Upload File to S3
     * @request POST:/v1/file/upload
     */
    postV1FileUpload: (data: PostV1FileUploadRequestBody, params: RequestParams = {}) =>
      this.request<PostV1FileUploadSuccessfulResponse, PostV1FileUploadErrorResponse>({
        path: `/v1/file/upload`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name PostV1FileDelete
     * @summary Delete File
     * @request POST:/v1/file/delete
     */
    postV1FileDelete: (data: PostV1FileDeleteRequestBody, params: RequestParams = {}) =>
      this.request<PostV1FileDeleteSuccessfulResponse, PostV1FileDeleteErrorResponse>({
        path: `/v1/file/delete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name GetV1CategoriesGet
     * @summary Get Categories endpoint
     * @request GET:/v1/categories/get
     */
    getV1CategoriesGet: (params: RequestParams = {}) =>
      this.request<GetV1CategoriesGetSuccessfulResponse, GetV1CategoriesGetErrorResponse>({
        path: `/v1/categories/get`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name GetV1CategoriesGetId
     * @summary Get Categories endpoint
     * @request GET:/v1/categories/get/{id}
     */
    getV1CategoriesGetId: (id: GetV1CategoriesGetIdParameterId, params: RequestParams = {}) =>
      this.request<GetV1CategoriesGetIdSuccessfulResponse, GetV1CategoriesGetIdErrorResponse>({
        path: `/v1/categories/get/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name PutV1CategoriesId
     * @summary Update Categories endpoint
     * @request PUT:/v1/categories/{id}
     * @secure
     */
    putV1CategoriesId: (
      id: PutV1CategoriesIdParameterId,
      data: PutV1CategoriesIdRequestBody,
      params: RequestParams = {}
    ) =>
      this.request<PutV1CategoriesIdSuccessfulResponse, PutV1CategoriesIdErrorResponse>({
        path: `/v1/categories/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name DeleteV1CategoriesDeleteId
     * @summary Delete Categories endpoint
     * @request DELETE:/v1/categories/delete/{id}
     * @secure
     */
    deleteV1CategoriesDeleteId: (
      id: DeleteV1CategoriesDeleteIdParameterId,
      params: RequestParams = {}
    ) =>
      this.request<
        DeleteV1CategoriesDeleteIdSuccessfulResponse,
        DeleteV1CategoriesDeleteIdErrorResponse
      >({
        path: `/v1/categories/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name PostV1CategoriesAdd
     * @summary Add Categories endpoint
     * @request POST:/v1/categories/add
     * @secure
     */
    postV1CategoriesAdd: (data: PostV1CategoriesAddRequestBody, params: RequestParams = {}) =>
      this.request<PostV1CategoriesAddSuccessfulResponse, PostV1CategoriesAddErrorResponse>({
        path: `/v1/categories/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categories
     * @name PostV1CategoriesUpdateSequence
     * @summary Update Categories endpoint
     * @request POST:/v1/categories/update/sequence
     * @secure
     */
    postV1CategoriesUpdateSequence: (
      data: PostV1CategoriesUpdateSequenceRequestBody,
      params: RequestParams = {}
    ) =>
      this.request<
        PostV1CategoriesUpdateSequenceSuccessfulResponse,
        PostV1CategoriesUpdateSequenceErrorResponse
      >({
        path: `/v1/categories/update/sequence`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubCategories
     * @name GetV1SubcategoriesGet
     * @summary Get Sub Categories endpoint
     * @request GET:/v1/subcategories/get
     */
    getV1SubcategoriesGet: (params: RequestParams = {}) =>
      this.request<GetV1SubcategoriesGetSuccessfulResponse, GetV1SubcategoriesGetErrorResponse>({
        path: `/v1/subcategories/get`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubCategories
     * @name PutV1SubcategoriesId
     * @summary Update Sub Categories endpoint
     * @request PUT:/v1/subcategories/{id}
     * @secure
     */
    putV1SubcategoriesId: (
      id: PutV1SubcategoriesIdParameterId,
      data: PutV1SubcategoriesIdRequestBody,
      params: RequestParams = {}
    ) =>
      this.request<PutV1SubcategoriesIdSuccessfulResponse, PutV1SubcategoriesIdErrorResponse>({
        path: `/v1/subcategories/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubCategories
     * @name DeleteV1SubcategoriesDeleteId
     * @summary Delete Sub Categories endpoint
     * @request DELETE:/v1/subcategories/delete/{id}
     * @secure
     */
    deleteV1SubcategoriesDeleteId: (
      id: DeleteV1SubcategoriesDeleteIdParameterId,
      params: RequestParams = {}
    ) =>
      this.request<
        DeleteV1SubcategoriesDeleteIdSuccessfulResponse,
        DeleteV1SubcategoriesDeleteIdErrorResponse
      >({
        path: `/v1/subcategories/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SubCategories
     * @name PostV1SubcategoriesAdd
     * @summary Add Sub Categories endpoint
     * @request POST:/v1/subcategories/add
     * @secure
     */
    postV1SubcategoriesAdd: (data: PostV1SubcategoriesAddRequestBody, params: RequestParams = {}) =>
      this.request<PostV1SubcategoriesAddSuccessfulResponse, PostV1SubcategoriesAddErrorResponse>({
        path: `/v1/subcategories/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name GetV1ProjectsGet
     * @summary Get Projects endpoint
     * @request GET:/v1/projects/get
     */
    getV1ProjectsGet: (
      query?: {
        /** Page Number */
        page?: GetV1ProjectsGetParameterPage;
        /** Limit */
        limit?: GetV1ProjectsGetParameterLimit;
        /** GET /v1/projects/get parameter */
        search?: GetV1ProjectsGetParameterSearch;
        /** GET /v1/projects/get parameter */
        category?: GetV1ProjectsGetParameterCategory;
        /** GET /v1/projects/get parameter */
        subCategory?: GetV1ProjectsGetParameterSubCategory;
        /** GET /v1/projects/get parameter */
        tags?: GetV1ProjectsGetParameterTags;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetV1ProjectsGetSuccessfulResponse, GetV1ProjectsGetErrorResponse>({
        path: `/v1/projects/get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name GetV1ProjectsGetId
     * @summary Get Single Projects endpoint
     * @request GET:/v1/projects/get/{id}
     */
    getV1ProjectsGetId: (id: GetV1ProjectsGetIdParameterId, params: RequestParams = {}) =>
      this.request<GetV1ProjectsGetIdSuccessfulResponse, GetV1ProjectsGetIdErrorResponse>({
        path: `/v1/projects/get/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name PutV1ProjectsId
     * @summary Add Projects endpoint
     * @request PUT:/v1/projects/{id}
     * @secure
     */
    putV1ProjectsId: (
      id: PutV1ProjectsIdParameterId,
      data: PutV1ProjectsIdRequestBody,
      params: RequestParams = {}
    ) =>
      this.request<PutV1ProjectsIdSuccessfulResponse, PutV1ProjectsIdErrorResponse>({
        path: `/v1/projects/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name DeleteV1ProjectsDeleteId
     * @summary Delete Projects endpoint
     * @request DELETE:/v1/projects/delete/{id}
     * @secure
     */
    deleteV1ProjectsDeleteId: (
      id: DeleteV1ProjectsDeleteIdParameterId,
      params: RequestParams = {}
    ) =>
      this.request<
        DeleteV1ProjectsDeleteIdSuccessfulResponse,
        DeleteV1ProjectsDeleteIdErrorResponse
      >({
        path: `/v1/projects/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name PostV1ProjectsAdd
     * @summary Add Projects endpoint
     * @request POST:/v1/projects/add
     * @secure
     */
    postV1ProjectsAdd: (data: PostV1ProjectsAddRequestBody, params: RequestParams = {}) =>
      this.request<PostV1ProjectsAddSuccessfulResponse, PostV1ProjectsAddErrorResponse>({
        path: `/v1/projects/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name GetV1ProjectsTags
     * @summary Get Projects endpoint
     * @request GET:/v1/projects/tags
     */
    getV1ProjectsTags: (params: RequestParams = {}) =>
      this.request<GetV1ProjectsTagsSuccessfulResponse, GetV1ProjectsTagsErrorResponse>({
        path: `/v1/projects/tags`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name GetV1ProjectsTotal
     * @summary Get Total Projects Count endpoint
     * @request GET:/v1/projects/total
     */
    getV1ProjectsTotal: (params: RequestParams = {}) =>
      this.request<GetV1ProjectsTotalSuccessfulResponse, GetV1ProjectsTotalErrorResponse>({
        path: `/v1/projects/total`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Projects
     * @name PutV1ProjectsUpdateSequence
     * @summary Add Projects endpoint
     * @request PUT:/v1/projects/update/sequence
     * @secure
     */
    putV1ProjectsUpdateSequence: (
      data: PutV1ProjectsUpdateSequenceRequestBody,
      params: RequestParams = {}
    ) =>
      this.request<
        PutV1ProjectsUpdateSequenceSuccessfulResponse,
        PutV1ProjectsUpdateSequenceErrorResponse
      >({
        path: `/v1/projects/update/sequence`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reviews
     * @name GetV1ReviewsGet
     * @summary Get Reviews
     * @request GET:/v1/reviews/get
     */
    getV1ReviewsGet: (
      query?: {
        /** GET /v1/reviews/get parameter */
        type?: GetV1ReviewsGetParameterType;
        /** GET /v1/reviews/get parameter */
        clientName?: GetV1ReviewsGetParameterClientName;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetV1ReviewsGetSuccessfulResponse, GetV1ReviewsGetErrorResponse>({
        path: `/v1/reviews/get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reviews
     * @name GetV1ReviewsGetId
     * @summary Get Reviews
     * @request GET:/v1/reviews/get/{id}
     */
    getV1ReviewsGetId: (id: GetV1ReviewsGetIdParameterId, params: RequestParams = {}) =>
      this.request<GetV1ReviewsGetIdSuccessfulResponse, GetV1ReviewsGetIdErrorResponse>({
        path: `/v1/reviews/get/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reviews
     * @name PutV1ReviewsId
     * @summary Update Reviews
     * @request PUT:/v1/reviews/{id}
     * @secure
     */
    putV1ReviewsId: (
      id: PutV1ReviewsIdParameterId,
      data: PutV1ReviewsIdRequestBody,
      params: RequestParams = {}
    ) =>
      this.request<PutV1ReviewsIdSuccessfulResponse, PutV1ReviewsIdErrorResponse>({
        path: `/v1/reviews/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reviews
     * @name DeleteV1ReviewsDeleteId
     * @summary Delete a Review
     * @request DELETE:/v1/reviews/delete/{id}
     * @secure
     */
    deleteV1ReviewsDeleteId: (id: DeleteV1ReviewsDeleteIdParameterId, params: RequestParams = {}) =>
      this.request<DeleteV1ReviewsDeleteIdSuccessfulResponse, DeleteV1ReviewsDeleteIdErrorResponse>(
        {
          path: `/v1/reviews/delete/${id}`,
          method: 'DELETE',
          secure: true,
          format: 'json',
          ...params,
        }
      ),

    /**
     * No description
     *
     * @tags Reviews
     * @name PostV1ReviewsAdd
     * @summary Add Reviews
     * @request POST:/v1/reviews/add
     * @secure
     */
    postV1ReviewsAdd: (data: PostV1ReviewsAddRequestBody, params: RequestParams = {}) =>
      this.request<PostV1ReviewsAddSuccessfulResponse, PostV1ReviewsAddErrorResponse>({
        path: `/v1/reviews/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reviews
     * @name GetV1ReviewsSummary
     * @summary Get Reviews
     * @request GET:/v1/reviews/summary
     */
    getV1ReviewsSummary: (params: RequestParams = {}) =>
      this.request<GetV1ReviewsSummarySuccessfulResponse, GetV1ReviewsSummaryErrorResponse>({
        path: `/v1/reviews/summary`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
}
