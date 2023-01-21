import { ERoute } from "./ERoute.enum";

export interface uriParams {
    key: string,
    value: string | number
}

export const isUriParams = (test: uriParams[] | null): test is uriParams[] => {
    return Array.isArray(test);
}

export class AppRoute {

    private baseUri: ERoute;
    private variableUri: string | null;
    private params: uriParams[] | null;

    public constructor(baseUri: ERoute, variableUri?: string | number, params?: uriParams[]){
        this.baseUri = baseUri;
        this.variableUri = variableUri ? variableUri.toString() : null;
        this.params = params ?? null;
    }

    public getUri(): string {

        let urlParams = '';
        if(isUriParams(this.params)){
            urlParams = '?' + this.params.map(up => `${up.key}=${encodeURIComponent(up.value)}`).join('&');
        }
        return `${this.baseUri}${this.variableUri ? '/' + this.variableUri : ''}${urlParams}`;
    }

}