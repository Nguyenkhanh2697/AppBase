import { RequestBuilder, ServiceSaga } from "@library/networking";
import { SearchForm } from "../detailHome";
import { Pagable } from "../detailHome/index.prop";

export class Album {
    title: string;
}

export class AlbumApi {
    findAll(pageable: Pagable, params: SearchForm) {
        return new RequestBuilder<Album>()
            .url("")
            .params(params as any)
            .findAll();
    }
}

export const albumApi = new AlbumApi();