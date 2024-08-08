'use client';

import { useCallback, useRef, useEffect, MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';

type ModalProps = {
  children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
  // 重なる部分
  const overlay = useRef(null);
  // 表示部分
  const wrapper = useRef(null);
  // 戻り処理に利用する
  const router = useRouter();

  // 戻る処理
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  // 重な部分をクリックすると、モーダルを閉じる
  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  // ESCをクリックしてもモーダルを閉じる
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss],
  );

  // イベントハンドラーの登録
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="
        fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 min-w-full"
      >
        <div className="mx-4">{children}</div>
      </div>
    </div>
  );
}
