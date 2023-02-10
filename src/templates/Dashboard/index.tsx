import React from 'react';

import Icon from 'utils/icon.config';

import * as S from './styles';

export const Dashboard: React.FC = () => {
  return (
    <>
      <S.Grid>
        <S.Aside>
          <S.Logo>
            <img src="/img/logo.png" />
          </S.Logo>
          <S.Links>
            <S.Item type="active">
              <Icon.MdOutlinePets size={20} />
              Link
            </S.Item>
            <S.Item type="not-active">
              <Icon.MdOutlinePets size={20} />
              Link
            </S.Item>
          </S.Links>
        </S.Aside>
        <S.Main>Men</S.Main>
      </S.Grid>
    </>
  );
};
