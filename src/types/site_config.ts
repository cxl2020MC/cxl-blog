interface site_config {
    /**
     * 站点名
     */
    site_name: string;

    /**
     * 网站描述
     */
    description: string;

    /**
     * 作者
     */
    author: string;

    /**
     * 网站对外访问url
     */
    url: string;

    /**
     * 后端接口地址
     * 例如：http://localhost:3000/api
     */
    api_url: string;
} 

export type { site_config };