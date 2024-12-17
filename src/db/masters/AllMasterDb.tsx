import ViMasterDb from "../../db/masters/ViMasterDb.tsx";
import InMasterDb from "../../db/masters/InMasterDb.tsx";
import JpMasterDb from "../../db/masters/JpMasterDb.tsx";
import KoMasterDb from "../../db/masters/KoMasterDb.tsx";

import CnLv0MasterDb from "../../db/masters/CnLv0MasterDb.tsx";
import CnLv1MasterDb from "../../db/masters/CnLv1MasterDb.tsx";
import CnLv2MasterDb from "../../db/masters/CnLv2MasterDb.tsx";
import CnLv3MasterDb from "../../db/masters/CnLv3MasterDb.tsx";
import CnLv4MasterDb from "../../db/masters/CnLv4MasterDb.tsx";
import CnLv5MasterDb from "../../db/masters/CnLv5MasterDb.tsx";
import CnLv6MasterDb from "../../db/masters/CnLv6MasterDb.tsx";
import CnLv7MasterDb from "../../db/masters/CnLv7MasterDb.tsx";
import CnLv8MasterDb from "../../db/masters/CnLv8MasterDb.tsx";
import CnLv9MasterDb from "../../db/masters/CnLv9MasterDb.tsx";
import CnLv10MasterDb from "../../db/masters/CnLv10MasterDb.tsx";
import CnLv11MasterDb from "../../db/masters/CnLv11MasterDb.tsx";
import CnLv12MasterDb from "../../db/masters/CnLv12MasterDb.tsx";
import CnLv13MasterDb from "../../db/masters/CnLv13MasterDb.tsx";
import CnLv14MasterDb from "../../db/masters/CnLv14MasterDb.tsx";
import CnLv15MasterDb from "../../db/masters/CnLv15MasterDb.tsx";
import CnLv16MasterDb from "../../db/masters/CnLv16MasterDb.tsx";
import CnLv17MasterDb from "../../db/masters/CnLv17MasterDb.tsx";
import CnLv18MasterDb from "../../db/masters/CnLv18MasterDb.tsx";
import CnLv19MasterDb from "../../db/masters/CnLv19MasterDb.tsx";
import CnLv20MasterDb from "../../db/masters/CnLv20MasterDb.tsx";
import CnLv21MasterDb from "../../db/masters/CnLv21MasterDb.tsx";
import CnLv22MasterDb from "../../db/masters/CnLv22MasterDb.tsx";
import CnLv23MasterDb from "../../db/masters/CnLv23MasterDb.tsx";
import CnLv24MasterDb from "../../db/masters/CnLv24MasterDb.tsx";
import CnLv25MasterDb from "../../db/masters/CnLv25MasterDb.tsx";
import CnLv26MasterDb from "../../db/masters/CnLv26MasterDb.tsx";
import CnLv27MasterDb from "../../db/masters/CnLv27MasterDb.tsx";
import CnLv28MasterDb from "../../db/masters/CnLv28MasterDb.tsx";
import CnLv29MasterDb from "../../db/masters/CnLv29MasterDb.tsx";
import CnLv30MasterDb from "../../db/masters/CnLv30MasterDb.tsx";
import CnLv31MasterDb from "../../db/masters/CnLv31MasterDb.tsx";
import CnLv32MasterDb from "../../db/masters/CnLv32MasterDb.tsx";
import CnLv33MasterDb from "../../db/masters/CnLv33MasterDb.tsx";

export const InMasters = InMasterDb
export const ViMasters = ViMasterDb
export const JpMasters = JpMasterDb
export const KoMasters = KoMasterDb
export const CnMasters = [
  CnLv0MasterDb,
  CnLv1MasterDb,
  CnLv2MasterDb,
  CnLv3MasterDb,
  CnLv4MasterDb,
  CnLv5MasterDb,
  CnLv6MasterDb,
  CnLv7MasterDb,
  CnLv8MasterDb,
  CnLv9MasterDb,
  CnLv10MasterDb,
  CnLv11MasterDb,
  CnLv12MasterDb,
  CnLv13MasterDb,
  CnLv14MasterDb,
  CnLv15MasterDb,
  CnLv16MasterDb,
  CnLv17MasterDb,
  CnLv18MasterDb,
  CnLv19MasterDb,
  CnLv20MasterDb,
  CnLv21MasterDb,
  CnLv22MasterDb,
  CnLv23MasterDb,
  CnLv24MasterDb,
  CnLv25MasterDb,
  CnLv26MasterDb,
  CnLv27MasterDb,
  CnLv28MasterDb,
  CnLv29MasterDb,
  CnLv30MasterDb,
  CnLv31MasterDb,
  CnLv32MasterDb,
  CnLv33MasterDb,
]
export const AllMasters = [
  ...InMasters,
  ...CnMasters.flat(),
  ...JpMasters,
  ...ViMasters,
  ...KoMasters,
]
export const CnGuiyangMasters = AllMasters?.filter(master => master.sect.includes('Guiyang'));
export const CnLinjiMasters = AllMasters?.filter(master => master.sect.includes('Linji'));
export const CnCaodongMasters = AllMasters?.filter(master => master.sect.includes('Caodong'));
export const CnFayanMasters = AllMasters?.filter(master => master.sect.includes('Fayan'));
export const CnYunmenMasters = AllMasters?.filter(master => master.sect.includes('Yunmen'));
export const CnYangqiMasters = AllMasters?.filter(master => master.sect.includes('Yangqi'));
export const CnHuanglongMasters = AllMasters?.filter(master => master.sect.includes('Huanglong'));
export const AllSectMasters = [
  ...CnGuiyangMasters,
  ...CnLinjiMasters,
  ...CnCaodongMasters,
  ...CnFayanMasters,
  ...CnYunmenMasters,
  ...CnYangqiMasters,
  ...CnHuanglongMasters,
]
export const CnOtherMasterDb = CnMasters?.flat().filter(masterDb => masterDb.sect.includes('-'))
export const OtherMasterDb = AllMasters?.filter(master => master.sect.includes('-'))
