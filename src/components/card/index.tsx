import React, {useState, useCallback, useRef} from 'react';
import {ViewProps} from 'react-native';

import * as S from './styles';

import {FormProps, useProduct} from '../../context/useProduct';

interface CardProps extends ViewProps {
  productInfo: FormProps;
}

export const Card: React.FC<CardProps> = ({productInfo}: CardProps) => {
  const {removeProduct, updateProduct} = useProduct();

  const quantity = parseInt(productInfo.quantity, 10);
  const unityProduct = parseInt(productInfo.valueUnityProduct, 10);

  const totalRef = useRef(quantity * unityProduct);

  const [quantityProduct, setQuantityProduct] = useState(quantity);

  const plusProduct = useCallback(() => {
    setQuantityProduct(quantity + 1);
    totalRef.current = (quantity + 1) * unityProduct;
    updateProduct(productInfo.indexProduct, quantity + 1);
  }, [productInfo.indexProduct, quantity, unityProduct, updateProduct]);

  const minusProduct = useCallback(() => {
    setQuantityProduct(quantity - 1);
    totalRef.current = (quantity - 1) * unityProduct;
    updateProduct(productInfo.indexProduct, quantity - 1);
  }, [productInfo.indexProduct, quantity, unityProduct, updateProduct]);

  const deleteProduct = useCallback(() => {
    removeProduct(productInfo.indexProduct);
  }, [productInfo.indexProduct, removeProduct]);

  return (
    <S.Container>
      <S.HalfWrapper>
        <S.NameProduct numberOfLines={1}>
          {productInfo.indexProduct + 1}. {productInfo.nameProduct}
        </S.NameProduct>
        <S.ValueUnityProduct>
          R$ {unityProduct.toFixed(2).replace('.', ',')}
        </S.ValueUnityProduct>
      </S.HalfWrapper>

      <S.HalfWrapper rightSide>
        <S.MultiButtonContainer>
          {quantity - 1 === 0 ? (
            <S.Button trash activeOpacity={0.7} onPress={deleteProduct}>
              <S.IconMulti name="trash-2" size={16} color="#FFFFFF" />
            </S.Button>
          ) : (
            <S.Button activeOpacity={0.7} onPress={minusProduct}>
              <S.IconMulti name="minus" size={16} color="#FFFFFF" />
            </S.Button>
          )}

          <S.QuantityContainer>
            <S.QuantityProduct>{quantity}</S.QuantityProduct>
          </S.QuantityContainer>

          <S.Button activeOpacity={0.7} onPress={plusProduct}>
            <S.IconMulti name="plus" size={16} color="#FFFFFF" />
          </S.Button>
        </S.MultiButtonContainer>
        <S.ValueTotalProducts>
          R$ {(unityProduct * quantity).toFixed(2).replace('.', ',')}
        </S.ValueTotalProducts>
      </S.HalfWrapper>
    </S.Container>
  );
};
