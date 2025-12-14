import { useState } from "react";
import {
    Button,
    OverlayTrigger,
    Popover,
    Form,
    FloatingLabel
} from "react-bootstrap";
import api from "../api/api";

const ExpOv = ({ profile, setProfile }) => {

    const [exp, setExp] = useState({
        name: '',
        joinD: '',
        lastW: '',
        role: ''
    });

    const expList = profile.experience;

    const handleChange = (e) => {

        setExp({ ...exp, [e.target.name]: e.target.value });
    }

    const [show, setShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        expList.push(exp);

        setProfile({ ...profile, experience: expList });

        await api.put(`/profile/${profile.id}`, profile);

        setExp({
        name: '',
        joinD: '',
        lastW: '',
        role: ''
    });

    };

    const popover = (
        <Popover id="popover-basic" className="p-2 pop-edit">
            <Popover.Header as="h3" className="text-danger">
                Add Experience
            </Popover.Header>

            <Popover.Body>
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="floatingPhone"
                        label="Organization name"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            name="name"
                            value={exp.name}
                            onChange={handleChange}
                            required
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPhone"
                        label="Role"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            name="role"
                            value={exp.role}
                            onChange={handleChange}
                            required
                        />
                    </FloatingLabel>

                    <Form.Control
                        type="date"
                        name="joinD"
                        value={exp.joinD}
                        onChange={handleChange}
                        className="mb-3"
                        required
                    />

                    <Form.Control
                        type="date"
                        name="lastW"
                        value={exp.lastW}
                        onChange={handleChange}
                        className="mb-3"
                        required
                    />

                    <div className="d-flex justify-content-end gap-2">
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setShow(false)}
                        >
                            Cancel
                        </Button>
                        <Button variant="danger" size="sm" type="submit">
                            Add
                        </Button>
                    </div>
                </Form>
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger
            trigger="click"
            placement="left"
            show={show}
            overlay={popover}
            rootClose
            onToggle={() => setShow(!show)}
        >
            <Button variant="danger">
                <i className="bi bi-pencil"></i> Add
            </Button>
        </OverlayTrigger>
    );
};

export default ExpOv;
