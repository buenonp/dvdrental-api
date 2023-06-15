export class LanguageDTO {
    languageId: number;
    name: string;
    lastUpdate: Date;
}

export type CreateLanguageDTO = Omit<LanguageDTO, 'languageId' | 'lastUpdate'>;
export type UpdateLanguageDTO = Partial<LanguageDTO>;
