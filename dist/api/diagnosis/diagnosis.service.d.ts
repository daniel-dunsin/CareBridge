import { BoneMetricsDocument } from './schemas/bone.schema';
import { BrainMetricsDocument } from './schemas/brain.schema';
import { EyesMetricsDocument } from './schemas/eyes.schema';
import { HeartMetricsDocument } from './schemas/heart.schema';
import { KidneyMetricsDocument } from './schemas/kidney.schema';
import { LiverMetricsDocument } from './schemas/liver.schema';
import { SkinMetricsDocument } from './schemas/skin.schema';
import { TeethMetricsDocument } from './schemas/teeth.schema';
import { Model } from 'mongoose';
export declare class DiagnosisService {
    private readonly _boneMetricsModel;
    private readonly _brainMetricsModel;
    private readonly _eyesMetricsModel;
    private readonly _heartMetricsModel;
    private readonly _kidneyMetricsModel;
    private readonly _liverMetricsModel;
    private readonly _skinMetricsModel;
    private readonly _teethMetricsModel;
    constructor(_boneMetricsModel: Model<BoneMetricsDocument>, _brainMetricsModel: Model<BrainMetricsDocument>, _eyesMetricsModel: Model<EyesMetricsDocument>, _heartMetricsModel: Model<HeartMetricsDocument>, _kidneyMetricsModel: Model<KidneyMetricsDocument>, _liverMetricsModel: Model<LiverMetricsDocument>, _skinMetricsModel: Model<SkinMetricsDocument>, _teethMetricsModel: Model<TeethMetricsDocument>);
}
