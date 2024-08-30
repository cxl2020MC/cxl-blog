interface site_config {
    /**
     * 站点语言
     * 例如：zh-CN
     * 参考：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language
     */
    language: string;

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
    site_url: string;

    /**
     * 后端接口地址
     * 例如：http://localhost:3000/api
     */
    api_url: string;
    
} 

interface author_config {
    /**
     * 作者名字
     */
    name: string;
    /**
     * 作者头像
     */
    avatar: string;

    /**
     * 作者简介
     * 例如：前端开发工程师，热爱技术，乐于分享
     */
    description: string;

    /**
     * 作者邮箱
     */
    email: string;
}

export type { author_config, site_config };