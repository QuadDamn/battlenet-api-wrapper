import axios, {AxiosInstance} from "axios";

class BattlenetWrapper {
    private readonly clientId: string;
    private readonly clientSecret: string;
    private readonly origin: string;
    private readonly locale: string;
    private oauthToken: string;
    private axios: AxiosInstance;
    private originObject: Object = {
        us: {
            hostname: 'https://us.api.blizzard.com',
            defaultLocale: 'en_US',
            locales: ['en_US', 'es_MX', 'pt_BR', 'multi'],
        },
        eu: {
            hostname: 'https://eu.api.blizzard.com',
            defaultLocale: 'en_GB',
            locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT', 'multi'],
        },
        sea: {
            hostname: 'https://sea.api.blizzard.com',
            defaultLocale: 'en_US',
            locales: ['en_US', 'multi'],
        },
        kr: {
            hostname: 'https://kr.api.blizzard.com',
            defaultLocale: 'ko_KR',
            locales: ['ko_KR', 'en_GB', 'en_US', 'multi'],
        },
        tw: {
            hostname: 'https://tw.api.blizzard.com',
            defaultLocale: 'zh_TW',
            locales: ['zh_TW', 'en_GB', 'en_US', 'multi'],
        },
        cn: {
            hostname: 'https://gateway.battlenet.com.cn',
            defaultLocale: 'zh_CN',
            locales: ['zh_CN', 'en_GB', 'en_US', 'multi'],
        }
    };

    constructor(clientId: string, clientSecret: string, origin: string = 'us', locale: string = 'en_US') {
        if (!clientId) throw new Error('You are missing your Client ID in the passed parameters. This parameter is required.');
        if (!clientSecret) throw new Error('You are missing your Client Secret in the passed parameters. This parameter is required.');

        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.origin = origin;
        this.locale = locale;

        // Handles the fetching of a new OAuth token from the Battle.net API
        // and then creates a reusable instance of axios for all subsequent API requests.
        this._getToken().then(() => {
            this.axios = axios.create({
                baseURL: this.originObject[this.origin].hostname
            });

            this.axios.defaults.headers.common['Authorization'] = this.oauthToken;
        });
    }

    async _getToken() {
        this.oauthToken = await this.axios.get(`https://${this.origin}.battle.net/oauth/token`, {
            auth: {
                username: this.clientId,
                password: this.clientSecret,
            },
            params: {
                grant_type: 'client_credentials',
            },
        });
    }

    _formatBattleTag(battleTag: string): string {
        return battleTag.replace('#', '-');
    }
}