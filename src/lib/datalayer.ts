import api, { setAuthHeader } from "./api";
import qs from "qs";

// THUMBNAIL START
interface Format {
  url?: string;
  height?: number;
  width?: number;
}

interface Formats {
  large?: Format;
  medium?: Format;
  small?: Format;
  thumbnail?: Format;
}

interface Attributes {
  formats?: Formats;
  url?: string;
}

interface Thumbnail {
  attributes?: Attributes;
}

interface ThumbnailResult {
  large?: Format;
  medium?: Format;
  small?: Format;
  thumbnail?: Format;
  original?: string;
}

export const thumbnailReducer = (thumbnail: Thumbnail): ThumbnailResult => {
  let obj: ThumbnailResult = {};

  if (thumbnail?.attributes?.formats?.large) {
    obj.large = {
      url: thumbnail?.attributes?.formats?.large?.url,
      height: thumbnail?.attributes?.formats?.large?.height,
      width: thumbnail?.attributes?.formats?.large?.width,
    };
  }

  if (thumbnail?.attributes?.formats?.medium) {
    obj.medium = {
      url: thumbnail?.attributes?.formats?.medium?.url,
      height: thumbnail?.attributes?.formats?.medium?.height,
      width: thumbnail?.attributes?.formats?.medium?.width,
    };
  }

  if (thumbnail?.attributes?.formats?.small) {
    obj.small = {
      url: thumbnail?.attributes?.formats?.small?.url,
      height: thumbnail?.attributes?.formats?.small?.height,
      width: thumbnail?.attributes?.formats?.small?.width,
    };
  }

  if (thumbnail?.attributes?.formats?.thumbnail) {
    obj.thumbnail = {
      url: thumbnail?.attributes?.formats?.thumbnail?.url,
      height: thumbnail?.attributes?.formats?.thumbnail?.height,
      width: thumbnail?.attributes?.formats?.thumbnail?.width,
    };
  }

  if (thumbnail?.attributes?.url) {
    obj.original = thumbnail?.attributes?.url;
  }

  return obj;
};
// THUMBNAIL END

// TRAINERS START
export const trainerReducer = (data) => {
  let trainer = { ...data.attributes };

  trainer.id = data.id;
  trainer.image = thumbnailReducer(trainer.image.data);

  return trainer;
};

export const getTrainers = async ({ page = 1, pageSize = 6 } = {}) => {
  const query = qs.stringify(
    {
      populate: ["socials", "image"],
      pagination: {
        page,
        pageSize,
        withCount: true,
      },
      sort: ["createdAt:desc"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await api.get(`/trainers?${query}`);
  const rawTrainers = res.data.data;

  const trainers = rawTrainers.map((rawData) => trainerReducer(rawData));
  return {
    trainers,
    pagination: res.data.meta.pagination,
  };
};
// TRAINERS END

// SERVICES START
export const serviceReducer = (data) => {
  let service = { ...data.attributes };

  service.id = data.id;
  service.icon = thumbnailReducer(service.icon.data);
  service.image = thumbnailReducer(service.image.data);

  return service;
};

export const getServices = async ({ page = 1, pageSize = 6 } = {}) => {
  const query = qs.stringify(
    {
      populate: ["icon", "image"],
      pagination: {
        page,
        pageSize,
        withCount: true,
      },
      sort: ["createdAt:desc"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await api.get(`/services?${query}`);
  const rawServices = res.data.data;

  const services = rawServices.map((rawData) => serviceReducer(rawData));
  return {
    services,
    pagination: res.data.meta.pagination,
  };
};
// SERVICES END

// HOMEPAGE START
export const getHomepage = async () => {
  const query = qs.stringify(
    {
      populate: [
        "seo",
        "hero",
        "hero.cta_btn",
        "hero.secondary_btn",
        "hero.image",
        "about",
        "about.features",
        "about.cta_btn",
        "about.image",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await api.get(`/home?${query}`);

  if (res.data.data.attributes?.hero) {
    res.data.data.attributes.hero = {
      ...res.data.data.attributes.hero,
      image: thumbnailReducer(res.data.data.attributes.hero.image.data),
    };
  }

  if (res.data.data.attributes?.about) {
    res.data.data.attributes.about = {
      ...res.data.data.attributes.about,
      image: thumbnailReducer(res.data.data.attributes.about.image.data),
    };
  }

  return res.data.data.attributes;
};

export const getHomepageSeo = async () => {
  const query = qs.stringify(
    {
      populate: ["seo"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await api.get(`/home?${query}`);

  return res.data.data.attributes;
};
// HOMEPAGE END

// ABOUTPAGE START
export const getAboutpage = async () => {
  const query = qs.stringify(
    {
      populate: [
        "about",
        "about.features",
        "about.cta_btn",
        "about.image",
        "stats",
        "stats.cta_btn",
        "stats.stats",
        "stats.stats.icon",
        "review",
        "review.image",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await api.get(`/home?${query}`);

  if (res.data.data.attributes?.about) {
    res.data.data.attributes.about = {
      ...res.data.data.attributes.about,
      image: thumbnailReducer(res.data.data.attributes.about.image.data),
    };
  }

  if (res.data.data.attributes?.stats) {
    res.data.data.attributes.stats = {
      ...res.data.data.attributes.stats,
      stats: res.data.data.attributes.stats.stats?.map((item, i) => {
        return {
          ...item,
          icon: thumbnailReducer(item.icon.data),
        };
      }),
    };
  }

  if (res.data.data.attributes?.review) {
    res.data.data.attributes.review = {
      ...res.data.data.attributes.review,
      image: thumbnailReducer(res.data.data.attributes.review.image.data),
    };
  }

  return res.data.data.attributes;
};

export const getAboutpageSeo = async () => {
  const query = qs.stringify(
    {
      populate: ["seo"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await api.get(`/about?${query}`);

  return res.data.data.attributes;
};
// ABOUTPAGE END

// CONTACTPAGE START
export const getContactpage = async () => {
  const res = await api.get(`/contact`);
  return res.data.data.attributes;
};

export const getContactpageSeo = async () => {
  const query = qs.stringify(
    {
      populate: ["seo"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await api.get(`/contact?${query}`);
  return res.data.data.attributes;
};
// CONTACTPAGE END

// SERVICEPAFW START
export const getServicepageSeo = async () => {
  const query = qs.stringify(
    {
      populate: ["seo"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await api.get(`/servicepage?${query}`);
  return res.data.data.attributes;
};
// SERVICEPAFW END

// FOOTER START
export const getFooter = async () => {
  const query = qs.stringify(
    {
      populate: ["logo"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await api.get(`/footer?${query}`);

  return {
    ...res.data.data.attributes,
    logo: thumbnailReducer(res.data.data.attributes.logo.data),
  };
};
// FOOTER END

// REVIEWS START
export const reviewReducer = (data) => {
  let review = { ...data.attributes };

  review.id = data.id;
  review.avatar = thumbnailReducer(review.avatar.data);

  return review;
};

export const getReviews = async ({ page = 1, pageSize = 6 } = {}) => {
  const query = qs.stringify(
    {
      populate: ["avatar"],
      pagination: {
        page,
        pageSize,
        withCount: true,
      },
      sort: ["createdAt:desc"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await api.get(`/reviews?${query}`);
  const rawReviews = res.data.data;

  const reviews = rawReviews.map((rawData) => reviewReducer(rawData));
  return {
    reviews,
    pagination: res.data.meta.pagination,
  };
};
// REVIEWS END

// GLOBAL START
export const getGlobalData = async () => {
  const query = qs.stringify(
    {
      populate: [
        "seo",
        "global",
        "global.phones",
        "global.logo",
        "global.socials",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await api.get(`/global?${query}`);

  if (res.data.data.attributes?.global) {
    res.data.data.attributes.global = {
      ...res.data.data.attributes.global,
      logo: thumbnailReducer(res.data.data.attributes.global.logo.data),
    };
  }

  return res.data.data.attributes;
};

export const getGlobalDataSeo = async () => {
  const query = qs.stringify(
    {
      populate: ["seo"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await api.get(`/global?${query}`);

  return res.data.data.attributes;
  
};
// GLOBAL END