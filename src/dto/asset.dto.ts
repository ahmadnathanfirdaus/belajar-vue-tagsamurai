interface GetAssetsQueryParams {
  limit?: number;
  page?: number;
  search?: string;
}

interface GetAssetsResponse {
  totalRecords: number;
  data: {
    _id: string;
    name: {
      id: string;
      name: string;
      nameWithSequence: string;
    };
    tagType: string;
    category: {
      id: string;
      name: string;
      nameWithSequence: string;
    };
    group: {
      id: string;
      name: string;
    };
    brand: {
      id: string;
      name: string;
    };
    model: {
      id: string;
      name: string;
    };
    updatedAt: string;
  }[];
}

export type { GetAssetsQueryParams, GetAssetsResponse };
