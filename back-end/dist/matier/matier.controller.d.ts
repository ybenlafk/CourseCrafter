import { MatierService } from './matier.service';
import { CreateMatierDto } from './dto/create-matier.dto/create-matier.dto';
import { UpdateMatierDto } from './dto/update-matier.dto/update-matier.dto';
export declare class MatierController {
    private readonly matierService;
    constructor(matierService: MatierService);
    GetAllMatiers(): Promise<{
        id: number;
        name: string;
        formation_id: number;
    }[]>;
    GetMatierById(id: number): Promise<{
        id: number;
        name: string;
        formation_id: number;
    }>;
    CreateMatier(data: CreateMatierDto): void;
    UpdateMatier(data: UpdateMatierDto, id: number): void;
    DeleteMatier(id: number): void;
}
