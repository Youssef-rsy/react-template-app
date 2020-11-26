import React from 'react';

const ContentHeader = () =>{
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-12">
                        <ol className="breadcrumb breadcrumb-dark breadcrumb-transparent float-sm-left">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Starter Page</li>
                        </ol>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <h1 className="m-0 text-dark">Starter Page</h1>
                    </div>{/** /.col **/}
                    {/** /.col **/}
                </div>{/** /.row **/}
            </div>{/** /.container-fluid **/}
        </div>
    )
}
export default ContentHeader;