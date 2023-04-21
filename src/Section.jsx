export default function Section({ items, addToCart }) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {items.map((item) => {
            return (
              <div key={item.id} className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Sale badge--> */}
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                  {/* <!-- Product image--> */}
                  <img className="card-img-top" src={item.imgSrc} alt="..." />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">{item.name}</h5>
                      {/* <!-- Product reviews--> */}
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        {[1, 2, 3, 4, 5].map((num) => {
                          if (num <= item.rating) {
                            return (
                              <div key={num} className="bi-star-fill"></div>
                            );
                          }
                          return <div key={num} className="bi-star"></div>;
                        })}
                      </div>
                      {/* <!-- Product price--> */}
                      {item.price}
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => addToCart(item.id)}
                        disabled={item.isAddedToCart}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
