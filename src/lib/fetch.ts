export class Source {

    #controller: AbortController;
    #token: AbortSignal;

    constructor() {
        this.#controller = new AbortController();
        this.#token = this.#controller.signal;
    }

    get token (){
        return this.#token;
    }

    cancel() {
        this.#controller.abort();
    }
}

export interface urlParam {
    key: string,
    value: string
}

export const getSource = () => new Source();

export const getData = async (url: string, cancelToken: AbortSignal, urlParams?: urlParam[]) => {

    const options = {signal: cancelToken};

    try {
        const response = await fetch(url + convertParamsToUrl(urlParams ?? []), options);
        if (!response.ok)  throw new Error(`HTTP error: ${response.status}`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error + ' (' + url + ')');
        throw error;
    }
};

export const getPdf = async (url: string, urlParams?: urlParam[]) => {

    const options = {
        headers: {
            'Accept': 'application/pdf'
        }
    };

    try {
        const response = await fetch(url + convertParamsToUrl(urlParams ?? []), options);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const blob = await response.blob();
        const data = window.URL.createObjectURL(blob);
        window.open(data, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1200,height=1200");
        return;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const postData = async (url: string, urlParams?: urlParam[]) => {

    const params: any = {};
    if (urlParams) urlParams.forEach(p => params[p.key] = p.value);

    const response = await fetch(url, {
        method: 'POST',
        //mode: 'cors', // no-cors, *cors, same-origin
        //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params) // body data type must match "Content-Type" header
    });
    
    return response.json(); // parses JSON response into native JavaScript objects
};

const convertParamsToUrl = (params: urlParam[]): string => {
    if(params.length < 1) return '';
    return '?' + params.map(p => p.key + '=' + encodeURIComponent(p.value)).join('&');
};