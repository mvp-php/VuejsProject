<template>
    <div>
        <div class="dropzone" v-bind="getRootProps()">
            <input v-bind="getInputProps()" />
            <p v-if="isDragActive">Drop the files here ...</p>
            <p v-else>Drag 'n' drop some files here, or click to select files</p>
        </div>
    </div>
</template>

<script>
import { useDropzone } from "vue3-dropzone";
// import axios from "axios";

export default {
    name: "UseDropzoneDemo",
    setup() {
        // const url = "{your_url}"; // Your url on the server side
        const saveFiles = (files) => {
            const formData = new FormData(); // pass data as a form
            for (var x = 0; x < files.length; x++) {
                console.log(files)
                // append files as array to the form, feel free to change the array name
                formData.append("images[]", files[x]);
            }

            // post the formData to your backend where storage is processed. In the backend, you will need to loop through the array and save each file through the loop.

            // axios
            //     .post(url, formData, {
            //         headers: {
            //             "Content-Type": "multipart/form-data",
            //         },
            //     })
            //     .then((response) => {
            //         console.info(response.data);
            //     })
            //     .catch((err) => {
            //         console.error(err);
            //     });
        };

        function onDrop(acceptFiles, rejectReasons) {
            saveFiles(acceptFiles); // saveFiles as callback
            console.log("rejectReasons:",rejectReasons);
            console.log(rejectReasons);
        }

        const { getRootProps, getInputProps } = useDropzone({ onDrop });

        return {
            getRootProps,
            getInputProps,

        };
    },
};
</script>

<style scoped lang="css">
.dropzone {
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    border: 2px dashed #41b883;
    background-color: #fff;
    transition: 0.3s ease all;

    label {
        padding: 8px 12px;
        color: #fff;
        background-color: #41b883;
        transition: 0.3s ease all;
    }

    input {
        display: none;
    }
}

.active-dropzone {
    color: #fff;
    border-color: #fff;
    background-color: #41b883;

    label {
        background-color: #fff;
        color: #41b883;
    }
}
</style>