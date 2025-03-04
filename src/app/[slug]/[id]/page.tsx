import SingleMachine from "@/components/catalouge/SingleMachine/SingleMachine";


type TParams = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: any;
  };
  
const SingMachineDetailsPage = async({ params }: TParams)=> {
    const { id } = params;
    console.log({id});
    return (
        <div >
           <SingleMachine id={id} category_id={0} machine_name={""} title={""} png_img={""} img_1={""} img_2={""} img_3={""} description={""}/>
        </div>
    );
};

export default SingMachineDetailsPage