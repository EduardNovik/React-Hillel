import { ColorRing } from 'react-loader-spinner'
import { FC, ReactElement } from "react";

const Loader: FC = (): ReactElement => {
    return (
        <ColorRing
            visible={true}
            height="180"
            width="180"
            ariaLabel="blocks-loading"
            wrapperStyle={{ margin:'10% auto', display:'block' }}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
            );
        };
        
        export default Loader;
