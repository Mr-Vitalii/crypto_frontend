import { FC, useCallback, useState } from "react";
import { updateAvatar } from "redux/user/thunks";
import { FileRejection, useDropzone } from "react-dropzone";
import { toast } from "react-hot-toast";

import {
    Form,
    DropContainer,
    FilePreview,
    RejectedFiles,
    FormContainer,
    StyledListItem,
    DeleteButton,
} from "./styled-components";

import { Box, List, ListItem, Typography } from "@mui/material";
import { useAppDispatch } from "utils/hooks";
import { getErrorMessage } from "utils/helpers/getErrorMessage";
import { IFile } from "common/types/avatar";
import { AppLoadingButton } from "components/global/AppLoadingButton/AppLoadingButton";

export const ChangeAvatar: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const [file, setFile] = useState<null | IFile>(null);
    const [rejected, setRejected] = useState<never[] | FileRejection[]>([]);
    const [showPreview, setShowPreview] = useState<boolean>(false);

    const onDrop = useCallback(
        (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
            if (acceptedFiles.length === 1) {
                const acceptedFile = acceptedFiles[0];
                setFile(
                    Object.assign(acceptedFile, {
                        preview: URL.createObjectURL(acceptedFile),
                    }),
                );
                setShowPreview(true);
            } else {
                setRejected(rejectedFiles);
            }
        },
        [],
    );
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            "image/*": [],
        },
        maxSize: 1024 * 1000,
        maxFiles: 1,
        onDrop,
    });

    const removeFile = () => {
        setFile(null);
    };

    const removeRejected = () => {
        setRejected([]);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file) {
            toast(`You need to add an avatar first`, {
                duration: 3000,
            });
            return;
        }

        if (file) {
            const formData = new FormData();
            formData.append("avatar", file);
            try {
                await dispatch(updateAvatar(formData)).unwrap();
                toast.success(`Avatar update`, {
                    duration: 3000,
                });
                setShowPreview(false);
            } catch (e: any) {
                toast.error(getErrorMessage(e), {
                    duration: 3000,
                });
            }
        }
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <DropContainer {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <Typography variant="body1">
                            Drop the files here ...
                        </Typography>
                    ) : (
                        <Box>
                            <Typography variant="body1">
                                Drag 'n' drop some file here, or click to select
                                file
                            </Typography>
                            <Typography variant="caption">
                                File size should not exceed 1 Mb
                            </Typography>
                        </Box>
                    )}
                </DropContainer>

                <FilePreview>
                    {file && showPreview && (
                        <>
                            <img
                                src={file.preview}
                                alt={file.name}
                                onLoad={() => {
                                    URL.revokeObjectURL(file.preview);
                                }}
                            />
                            <DeleteButton type="button" onClick={removeFile}>
                                Delete
                            </DeleteButton>
                            <Typography variant="body2">{file.name}</Typography>
                        </>
                    )}
                </FilePreview>
                <RejectedFiles>
                    {rejected && (
                        <List>
                            {rejected.map(({ file, errors }) => (
                                <StyledListItem key={file.name}>
                                    <Box>
                                        <Typography variant="body1">
                                            Unable to upload file {file.name}
                                        </Typography>
                                        <List sx={{ p: 0 }}>
                                            {errors.map((error) => (
                                                <ListItem
                                                    key={error.code}
                                                    sx={{ p: 0 }}
                                                >
                                                    {error.message}
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                    <DeleteButton
                                        type="button"
                                        onClick={removeRejected}
                                    >
                                        Delete
                                    </DeleteButton>
                                </StyledListItem>
                            ))}
                        </List>
                    )}
                </RejectedFiles>
                <AppLoadingButton sx={{ mx: "auto" }} type="submit">
                    Upload avatar
                </AppLoadingButton>
            </Form>
        </FormContainer>
    );
};
