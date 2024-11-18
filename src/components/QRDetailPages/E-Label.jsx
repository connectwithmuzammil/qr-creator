import React, { useEffect, useState } from "react";
import { InputCheckboxComponent, InputComponent } from "../InputComponent";
import ImageUploadComponent from "../ImageUploadComp";
import { AccordianComponent } from "../AccordianComponent";
import { PreviewFrame, TopPreviewHeader } from "../SVGIcon";
import { QRPreviewURL } from "./QRPreviewAll";
import ToggleButton from "./QRToggleButton";
import { useLocation } from "react-router-dom";
import ReviewFormBuilder from "../ReactFormBuilder";

const ELabels = ({ localQrData, setLocalQrData }) => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("Preview Page");
  const [showCustomQuestion, setShowCustomQuestion] = useState(false);

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  const [selectedProduct, setSelectedProduct] = useState("Wine/Spirits");

  const handleProductSelection = (product) => {
    setSelectedProduct(product);

    setLocalQrData((prevData) => ({
      ...prevData,
      wine: product === "Wine/Spirits",
      beer: product === "Beer",
      cigars: product === "Cigars",
      coffee: product === "Coffee",
      food: product === "Food",
      product: product === "Product",
    }));
  };

  console.log("checklocalqrdata", localQrData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalQrData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (location.state?.qrData) {
      const localQrDataFromLocation = location?.state?.qrData?.data;
      console.log("localQrDataFromLocation", localQrDataFromLocation);
      setLocalQrData(localQrDataFromLocation);
    }
  }, [location.state?.qrData]);

  // Use a separate effect to set selectedProduct based on localQrData changes
  useEffect(() => {
    if (localQrData) {
      const productMap = {
        "Wine/Spirits": localQrData.wine,
        Beer: localQrData.beer,
        Cigars: localQrData.cigars,
        Coffee: localQrData.coffee,
        Food: localQrData.food,
        Product: localQrData.product,
      };

      for (const [product, isSelected] of Object.entries(productMap)) {
        if (isSelected) {
          setSelectedProduct(product);
          break; // Exit once we find the selected product
        }
      }
    }
  }, [localQrData]);

  return (
    <div className="app-page">
      {/* Buttons for selecting product */}
      <div className="product-selection-buttons">
        <button
          onClick={() => handleProductSelection("Wine/Spirits")}
          className={selectedProduct === "Wine/Spirits" ? "selected" : ""}
        >
          Wine/Spirits
        </button>
        <button
          onClick={() => handleProductSelection("Beer")}
          className={selectedProduct === "Beer" ? "selected" : ""}
        >
          Beer
        </button>
        <button
          onClick={() => handleProductSelection("Cigars")}
          className={selectedProduct === "Cigars" ? "selected" : ""}
        >
          Cigars
        </button>
        <button
          onClick={() => handleProductSelection("Coffee")}
          className={selectedProduct === "Coffee" ? "selected" : ""}
        >
          Coffee
        </button>
        <button
          onClick={() => handleProductSelection("Food")}
          className={selectedProduct === "Food" ? "selected" : ""}
        >
          Food
        </button>
        <button
          onClick={() => handleProductSelection("Product")}
          className={selectedProduct === "Product" ? "selected" : ""}
        >
          Product
        </button>
      </div>

      {/* Accordion layout based on selected product */}
      {selectedProduct && (
        <div className="containerr">
          <div className="left">
            {selectedProduct === "Wine/Spirits" && (
              <AccordianComponent title={"Wine/Spirits Details"}>
                <InputComponent
                  label="Grape Variety"
                  placeholder="Enter Grape Variety"
                  value={localQrData?.grapeVariety}
                  name="grapeVariety"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Alcohol Volume"
                  placeholder="Enter Alcohol Volume"
                  value={localQrData?.alcoholVolume}
                  name="alcoholVolume"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Tasting Notes"
                  placeholder="Enter Tasting Notes"
                  value={localQrData?.tastingNotes}
                  name="tastingNotes"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Website"
                  placeholder="Enter Website URL"
                  value={localQrData?.website}
                  name="website"
                  onChange={handleInputChange}
                />
                <ImageUploadComponent
                  defaultImage="/assets/images/default-img.png"
                  label="Wine/Spirits Image"
                  onImageUpload={(imageUrl, name, file) => {
                    setLocalQrData((prev) => ({
                      ...prev,
                      [name]: imageUrl,
                    }));
                  }}
                  name="productImage"
                  localQrData={localQrData}
                />
              </AccordianComponent>
            )}

            {selectedProduct === "Beer" && (
              <AccordianComponent title={"Beer Details"}>
                <InputComponent
                  label="Product Name"
                  placeholder="Enter Product Name"
                  value={localQrData?.productName}
                  name="product_name"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="SKU"
                  placeholder="Enter SKU"
                  value={localQrData?.sku}
                  name="sku"
                  onChange={handleInputChange}
                />
                <ImageUploadComponent
                  defaultImage="/assets/images/default-img.png"
                  label="Beer Image"
                  onImageUpload={(imageUrl, name, file) => {
                    setLocalQrData((prev) => ({
                      ...prev,
                      [name]: file,
                    }));
                  }}
                  name="product_image"
                  localQrData={localQrData}
                />
                <InputComponent
                  label="Description"
                  placeholder="Enter Description"
                  value={localQrData?.description}
                  name="description"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Alcohol %"
                  placeholder="Enter Alcohol Percentage"
                  value={localQrData?.alcoholPercentage}
                  name="alcohol_percentage"
                  type="number"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="IPA"
                  placeholder="Enter IPA"
                  value={localQrData?.ipa}
                  name="ipa"
                  onChange={handleInputChange}
                />
                <ImageUploadComponent
                  defaultImage="/assets/images/default-img.png"
                  label="Nutrition Image"
                  onImageUpload={(imageUrl, name, file) => {
                    setLocalQrData((prev) => ({
                      ...prev,
                      [name]: file,
                    }));
                  }}
                  name="product_image"
                  localQrData={localQrData}
                />
                <InputComponent
                  label="Brewed"
                  placeholder="Enter Brewing Info"
                  value={localQrData?.brewed}
                  name="brewed"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Website"
                  placeholder="Enter Website URL"
                  value={localQrData?.website}
                  name="website"
                  onChange={handleInputChange}
                />
              </AccordianComponent>
            )}

            {selectedProduct === "Cigars" && (
              <AccordianComponent title={"Cigars Details"}>
                <InputComponent
                  label="Product Name"
                  placeholder="Enter Product Name"
                  value={localQrData?.productName}
                  name="productName"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="SKU"
                  placeholder="Enter SKU"
                  value={localQrData?.sku}
                  name="sku"
                  onChange={handleInputChange}
                />
                <ImageUploadComponent
                  defaultImage="/assets/images/default-img.png"
                  label="Cigars Image"
                  onImageUpload={(imageUrl, name, file) => {
                    setLocalQrData((prev) => ({
                      ...prev,
                      [name]: imageUrl,
                    }));
                  }}
                  name="cigarsImage"
                  localQrData={localQrData}
                />
                <InputComponent
                  label="Description"
                  placeholder="Enter Description"
                  value={localQrData?.description}
                  name="description"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Where it is made"
                  placeholder="Enter Origin"
                  value={localQrData?.origin}
                  name="origin"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Wrapper"
                  placeholder="Enter Wrapper"
                  value={localQrData?.wrapper}
                  name="wrapper"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Binder"
                  placeholder="Enter Binder"
                  value={localQrData?.binder}
                  name="binder"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Filler"
                  placeholder="Enter Filler"
                  value={localQrData?.filler}
                  name="filler"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Strength"
                  placeholder="Enter Strength"
                  value={localQrData?.strength}
                  name="strength"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Body"
                  placeholder="Enter Body"
                  value={localQrData?.body}
                  name="body"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Size"
                  placeholder="Enter Size"
                  value={localQrData?.size}
                  name="size"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Flavour Profile"
                  placeholder="Enter Flavour Profile"
                  value={localQrData?.flavourProfile}
                  name="flavourProfile"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Best Paired With"
                  placeholder="Enter Best Pairing"
                  value={localQrData?.bestPairedWith}
                  name="bestPairedWith"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Website"
                  placeholder="Enter Website URL"
                  value={localQrData?.website}
                  name="website"
                  onChange={handleInputChange}
                />
              </AccordianComponent>
            )}

            {selectedProduct === "Coffee" && (
              <AccordianComponent title={"Coffee Details"}>
                <InputComponent
                  label="Product Name"
                  placeholder="Enter Product Name"
                  value={localQrData?.productName}
                  name="productName"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="SKU"
                  placeholder="Enter SKU"
                  value={localQrData?.sku}
                  name="sku"
                  onChange={handleInputChange}
                />
                <ImageUploadComponent
                  defaultImage="/assets/images/default-img.png"
                  label="Coffee Image"
                  onImageUpload={(imageUrl, name, file) => {
                    setLocalQrData((prev) => ({
                      ...prev,
                      [name]: imageUrl,
                    }));
                  }}
                  name="coffeeImage"
                  localQrData={localQrData}
                />
                <InputComponent
                  label="Description"
                  placeholder="Enter Description"
                  value={localQrData?.description}
                  name="description"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Origin"
                  placeholder="Enter Origin"
                  value={localQrData?.origin}
                  name="origin"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Farm"
                  placeholder="Enter Farm"
                  value={localQrData?.farm}
                  name="farm"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Altitude"
                  placeholder="Enter Altitude"
                  value={localQrData?.altitude}
                  name="altitude"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Roast"
                  placeholder="Enter Roast"
                  value={localQrData?.roast}
                  name="roast"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Flavour"
                  placeholder="Enter Flavour"
                  value={localQrData?.flavour}
                  name="flavour"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Tasting Notes"
                  placeholder="Enter Tasting Notes"
                  value={localQrData?.tastingNotes}
                  name="tastingNotes"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Ingredients"
                  placeholder="Enter Ingredients"
                  value={localQrData?.ingredients}
                  name="ingredients"
                  onChange={handleInputChange}
                />
                <ImageUploadComponent
                  defaultImage="/assets/images/default-img.png"
                  label="Nutritional Image"
                  onImageUpload={(imageUrl, name, file) => {
                    setLocalQrData((prev) => ({
                      ...prev,
                      [name]: imageUrl,
                    }));
                  }}
                  name="nutritionalImage"
                  localQrData={localQrData}
                />
                <InputComponent
                  label="Website"
                  placeholder="Enter Website URL"
                  value={localQrData?.website}
                  name="website"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Storage"
                  placeholder="Enter Storage Instructions"
                  value={localQrData?.storage}
                  name="storage"
                  onChange={handleInputChange}
                />
                <div className="checkbox-group">
                  <label>
                    Organic
                    <input
                      type="checkbox"
                      checked={localQrData?.organic}
                      onChange={() =>
                        setLocalQrData((prev) => ({
                          ...prev,
                          organic: !prev.organic,
                        }))
                      }
                    />
                    <span
                      className={`checkbox-indicator ${
                        localQrData?.organic ? "green" : ""
                      }`}
                    />
                  </label>
                  <label>
                    Free Trade
                    <input
                      type="checkbox"
                      checked={localQrData?.freeTrade}
                      onChange={() =>
                        setLocalQrData((prev) => ({
                          ...prev,
                          freeTrade: !prev.freeTrade,
                        }))
                      }
                    />
                    <span
                      className={`checkbox-indicator ${
                        localQrData?.freeTrade ? "green" : ""
                      }`}
                    />
                  </label>
                </div>
              </AccordianComponent>
            )}

            {selectedProduct === "Food" && (
              <AccordianComponent title={"Food Details"}>
                <InputComponent
                  label="Food Name"
                  placeholder="Enter Food Name"
                  value={localQrData?.foodName}
                  name="foodName"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Cuisine"
                  placeholder="Enter Cuisine"
                  value={localQrData?.cuisine}
                  name="cuisine"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Ingredients"
                  placeholder="Enter Ingredients"
                  value={localQrData?.ingredients}
                  name="ingredients"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Serving Size"
                  placeholder="Enter Serving Size"
                  value={localQrData?.servingSize}
                  name="servingSize"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Calories"
                  placeholder="Enter Calories"
                  value={localQrData?.calories}
                  name="calories"
                  onChange={handleInputChange}
                />
                <ImageUploadComponent
                  defaultImage="/assets/images/default-img.png"
                  label="Food Image"
                  onImageUpload={(imageUrl, name, file) => {
                    setLocalQrData((prev) => ({
                      ...prev,
                      [name]: imageUrl,
                    }));
                  }}
                  name="foodImage"
                  localQrData={localQrData}
                />
                <InputComponent
                  label="Website"
                  placeholder="Enter Website URL"
                  value={localQrData?.website}
                  name="website"
                  onChange={handleInputChange}
                />
              </AccordianComponent>
            )}

            {selectedProduct === "Product" && (
              <AccordianComponent title={"Product Details"}>
                <InputComponent
                  label="Product Name"
                  placeholder="Enter Product Name"
                  value={localQrData?.productName}
                  name="productName"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="SKU"
                  placeholder="Enter SKU"
                  value={localQrData?.sku}
                  name="sku"
                  onChange={handleInputChange}
                />
                <ImageUploadComponent
                  defaultImage="/assets/images/default-img.png"
                  label="Product Image"
                  onImageUpload={(imageUrl, name, file) => {
                    setLocalQrData((prev) => ({
                      ...prev,
                      [name]: imageUrl,
                    }));
                  }}
                  name="productImage"
                  localQrData={localQrData}
                />
                <InputComponent
                  label="Description"
                  placeholder="Enter Description"
                  value={localQrData?.description}
                  name="description"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Direction"
                  placeholder="Enter Direction"
                  value={localQrData?.direction}
                  name="description"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Brand"
                  placeholder="Enter Brand"
                  value={localQrData?.brand}
                  name="brand"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Category"
                  placeholder="Enter Category"
                  value={localQrData?.category}
                  name="category"
                  onChange={handleInputChange}
                />
                <InputComponent
                  label="Price"
                  placeholder="Enter Price"
                  value={localQrData?.price}
                  name="price"
                  onChange={handleInputChange}
                />

                <InputComponent
                  label="Warning"
                  placeholder="Enter Warning"
                  value={localQrData?.warning}
                  name="warning"
                  onChange={handleInputChange}
                />
              </AccordianComponent>
            )}

            <AccordianComponent title={"Add Review"}>
              <div className="d-flex">
                <InputCheckboxComponent label={"Add Ratings"} />
                <InputCheckboxComponent
                  label={"Add Questions"}
                  onChange={() => setShowCustomQuestion(!showCustomQuestion)}
                  checked={showCustomQuestion}
                />
              </div>

              {showCustomQuestion && (
                <ReviewFormBuilder
                  setShowCustomQuestion={setShowCustomQuestion}
                  showCustomQuestion={showCustomQuestion}
                />
              )}
            </AccordianComponent>
          </div>
          <div className="right">
            <ToggleButton
              selectedOption={selectedOption}
              onToggle={handleToggle}
            />
            <div className="qr-preview__layout__image">
              <div className="Preview-layout Preview-layout--vcard">
                <TopPreviewHeader
                  className="topHeaderSvg"
                  urlLink={localQrData?.field_url}
                />
                <QRPreviewURL localQrData={localQrData} />
              </div>

              <PreviewFrame className="preview-frame" />
            </div>
            {/* <img src="/assets/images/phone-website.png" alt="phone-website" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ELabels;
