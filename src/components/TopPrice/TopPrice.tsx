import { FC } from "react";
import { CoinsTable } from "components/CoinsTable/CoinsTable";
import { ITablePriceData } from "common/types/coins";

export const TopPrice: FC<ITablePriceData> = (
    props: ITablePriceData,
): JSX.Element => {
    const { coins } = props;

    return <CoinsTable coins={coins} />;
};
