export type CFMessage = {
  code: number;
  message: string;
};

export type CFResponse<T> = {
  errors: CFMessage[];
  messages: CFMessage[];
  success: boolean;
  result: T;
};

export type CreateDNSRecordRequest = {
  content: string;
  name: string;
  proxied?: boolean;
  type: string;
  comment?: string;
  id: string;
  tags?: string[];
  ttl?: number;
};

export type CreateDNSRecordResponse = {
  content: string;
  name: string;
  proxied: boolean;
  type: string;
  comment: string;
  comment_modified_on: string;
  created_on: string;
  id: string;
  meta: {
    auto_added: boolean;
    source: string;
  };
  modified_on: string;
  proxiable: boolean;
  tags: [];
  tags_modified_on: string;
  ttl: number;
};
