import { useState } from "react";
import {
    Button,
    OverlayTrigger,
    Popover,
    Form,
    FloatingLabel
} from "react-bootstrap";
import api from "../api/api";


const Overl = ({profile, setProfile}) => {

    const [show, setShow] = useState(false);

    const handleChange = (e) => {

        setProfile({...profile, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = (await api.put(`/update-profile`, profile)).data;

        setProfile(res);

        setShow(false);
    };

    const popover = (
        <Popover id="popover-basic" className="p-2 pop-edit">
            <Popover.Header as="h3" className="text-danger">
                Edit Profile
            </Popover.Header>

            <Popover.Body>
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="floatingPhone"
                        label="Phone"
                        className="mb-3"
                    >
                        <Form.Control
                            type="number"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            required
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPhone"
                        label="location"
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            value={profile.location}
                            name="location"
                            onChange={handleChange}
                            required
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Comments"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" name="summary" required onChange={handleChange} placeholder="Leave a comment here" />
                    </FloatingLabel>

                    <div className="d-flex justify-content-end gap-2">
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setShow(false)}
                        >
                            Cancel
                        </Button>
                        <Button variant="danger" size="sm" type="submit">
                            Save
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
                <i className="bi bi-pencil"></i> Edit
            </Button>
        </OverlayTrigger>
    );
};

export default Overl;
