import { injectable, inject } from "tsyringe";

import { BaseControllerImpl } from "@/modules/base/BaseControllerImpl";

import {
    LanguageDTO,
    CreateLanguageDTO,
    UpdateLanguageDTO
} from "../../../dtos/LanguageDTO";

import { LanguageService } from "../../../business/services/LanguageService";

@injectable()
export class LanguageControllerImpl
    extends BaseControllerImpl<LanguageDTO, CreateLanguageDTO, UpdateLanguageDTO> {
    
    constructor(
        @inject('LanguageService')
        languageService: LanguageService
    ) {
        super(languageService);
    }

}