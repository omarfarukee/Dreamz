
import MachineSection from '@/components/catalouge/machine-section/MachineSection';
import React from 'react';
type TProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: any
}
const CatalogueDetailsPage = async ({ params }: TProps) => {

    const { slug } = params

    return (
        <div className=" mx-auto w-full">
            <MachineSection slug={slug}/>
        </div>
    );
};

export default CatalogueDetailsPage;