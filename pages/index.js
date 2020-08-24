import {Button, Col, Container, Form, Row} from 'react-bootstrap'

function Bot() {
    return <Container>
        <Row>
            <Col>
                <Form>
                    <Form.Group controlId="ana-link">
                        <Form.Label>Ana link</Form.Label>
                        <Form.Control placeholder="Ana link"
                                      defaultValue={"https://www.lcwaikiki.com/tr-TR/TR/dt/indirimli-urunler"}/>
                    </Form.Group>

                    <Form.Group controlId="isim">
                        <Form.Label>Ürün ismi</Form.Label>
                        <Form.Control placeholder="İsim"
                                      defaultValue={"div.product-item-wrapper a.a_model_item div.info div.title"}/>
                    </Form.Group>
                    <Form.Group controlId="resim">
                        <Form.Label>Ürün resmi</Form.Label>
                        <Form.Control placeholder="Resim" defaultValue={"div.product-item-wrapper a.a_model_item img"}/>
                    </Form.Group>
                    <Form.Group controlId="link">
                        <Form.Label>Ürün linki</Form.Label>
                        <Form.Control placeholder="Link" defaultValue={"div.product-item-wrapper a.a_model_item"}/>
                    </Form.Group>
                    <Form.Group controlId="eski-fiyat">
                        <Form.Label>Ürün eski fiyatı</Form.Label>
                        <Form.Control placeholder="Eski fiyat"
                                      defaultValue={"div.product-item-wrapper a.a_model_item div.info div.price div.old-price"}/>
                    </Form.Group>
                    <Form.Group controlId="yeni-fiyat">
                        <Form.Label>Ürün yeni fiyatı</Form.Label>
                        <Form.Control placeholder="Yeni fiyat"
                                      defaultValue={"div.product-item-wrapper a.a_model_item div.info div.price div.discount-price"}/>
                    </Form.Group>

                    <Button variant="primary" id={"getir"} type="submit">
                        Getir
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default Bot